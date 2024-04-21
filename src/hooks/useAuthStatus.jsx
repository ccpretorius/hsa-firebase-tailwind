import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Import getDoc
import { db } from "../firebase"; // Ensure you're importing your Firestore instance

export function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const [permissions, setPermissions] = useState({ home: false, offers: false }); // Default permissions

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch the user document from Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          // Set permissions based on the user document
          const userData = userDoc.data();
          setPermissions(userData.permissions || { home: false, offers: false });
        }
        setLoggedIn(true);
      } else {
        // Reset permissions if no user is logged in
        setPermissions({ home: false, offers: false });
      }
      setCheckingStatus(false);
    });
  }, []);

  return { loggedIn, checkingStatus, permissions }; // Include permissions in the returned object
}
