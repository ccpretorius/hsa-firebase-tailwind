import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Make sure this path is correct
import { toast } from "react-toastify";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [roles, setRoles] = useState({
    admin: false,
    staff: false,
    manager: false,
  });
  const [permissions, setPermissions] = useState({
    home: false,
    offers: false,
    admin: false,
  });

  // Fetch all users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          email: doc.data().email, // Assuming users have an email field
        }));
        setUsers(usersArray);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users.");
      }
    };

    fetchUsers();
  }, []);

  // Fetch selected user's data
  useEffect(() => {
    const fetchUserData = async () => {
      if (!selectedUserId) return;

      try {
        const docRef = doc(db, "users", selectedUserId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setRoles(
            userData.roles || {
              admin: false,
              staff: false,
              manager: false,
            }
          );
          setPermissions(
            userData.permissions || {
              home: false,
              offers: false,
              admin: false,
            }
          );
        } else {
          toast.error("User does not exist.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to fetch user data.");
      }
    };

    fetchUserData();
  }, [selectedUserId]);

  // Handle role change
  const handleRoleChange = (role) => {
    setRoles((prevRoles) => ({
      ...prevRoles,
      [role]: !prevRoles[role],
    }));
  };

  // Handle permission toggle
  const handlePermissionToggle = (permission) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [permission]: !prevPermissions[permission],
    }));
  };

  // Handle form submission to update user settings
  const handleUpdateUserSettings = async (e) => {
    e.preventDefault();

    try {
      const userRef = doc(db, "users", selectedUserId);
      await updateDoc(userRef, {
        roles,
        permissions,
      });
      console.log("Firestore permissions updated", { roles, permissions });

      toast.success("Admin Page: User settings updated successfully!");
    } catch (error) {
      console.error("Error updating user settings:", error);
      toast.error("Failed to update user settings.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Page - Update User Settings</h1>
        <select className="mb-4 block w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded" onChange={(e) => setSelectedUserId(e.target.value)} value={selectedUserId}>
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.email}
            </option>
          ))}
        </select>
        <form onSubmit={handleUpdateUserSettings} className="space-y-4">
          <fieldset>
            <legend className="text-gray-700 mb-2">Roles:</legend>
            {Object.keys(roles).map((role) => (
              <div key={role} className="flex items-center justify-between">
                <label className="text-gray-700">{role.charAt(0).toUpperCase() + role.slice(1)}</label>
                <input type="checkbox" checked={roles[role]} onChange={() => handleRoleChange(role)} className="toggle" />
              </div>
            ))}
          </fieldset>
          <fieldset>
            <legend className="text-gray-700 mb-2">Permissions:</legend>
            {Object.keys(permissions).map((permission) => (
              <div key={permission} className="flex items-center justify-between">
                <label className="text-gray-700">{permission.charAt(0).toUpperCase() + permission.slice(1)}</label>
                <button type="button" onClick={() => handlePermissionToggle(permission)} className={`px-2 py-1 rounded-full text-sm font-medium ${permissions[permission] ? "bg-green-500 text-white" : "bg-gray-200"}`}>
                  {permissions[permission] ? "True" : "False"}
                </button>
              </div>
            ))}
          </fieldset>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Update User Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
