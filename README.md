# Getting Started with Create React App

# Setting up react_firebase_basic_framework

1. Delete everything in App.js and just leave fractions with an <h1></h1> inside
2. https://favicon.io/ >> Generator
   Build a favicon.io and replace the existing one
3. Install tailwind
   https://tailwindcss.com/docs/installation
   - install
   - replace index.css with
     @tailwind base;
     @tailwind components;
     @tailwind utilities;

- Delete
  logos
  App.css
  App.test.js
  logo.svg
- Delete the unnecessary imports in App.js

4. Create a git respository

5. The following packages will be needed and is already specified in your dependancies for installation when you

npm install
react-router
react-router-dom
firebase
@firebase/firestore

# useLocation to style active header items

- import {useLocation} from 'react-router-dom'
- initialise it:
  const location =useLocation()
  whatever is in the pathname will be available under location.pathname
- In the <li></li> tag add to the default classes what you want as the active classes if the route is active
  You do this by passing a variable within ${} and with the whole string enclosed in back tick

<li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`}
</li>

- Create the function that checks if the passed in route === the location.pathname:

  function pathMatchRoute(route) {
  if (route === location.pathname) {
  return true;
  }
  }

- The passed in route would be different for each <li></li> tag

# Navigate within the website with useNavigate

- import it and initiate it
  import {useNavigate} from 'react-router-dom'
  const navigate = useNavigate()
- Inside an image you can just do onClick={() => navigate("/")} and you will fast navigate to the specified route

# Setting up Firebase and Firestore

1. Firebase and firebase/firestore is already in the dependancies and therefore installed when you have run npm install
2. Create firebase.js inside src (can also call it firebase.config)
3. Copy the SDK into this config file

- In this case the framework is set so you only really need to copy over the firebaseConfig data

We already did this:
// Initialize Firebase
const app = initializeApp(firebaseConfig);

- It needs to initialize so delete the const app before the initialize

We already did this:

- import {getFirestore} from "firebase/firestore

We already did this:

- export const db = getFirestore()

4. Continue to console and click on built and initialize Authentication

- Add email/password and google and enable each one

# Setting up the database

1. Go to Firestore and create a database
2. Copy the Firebase rules over from the Firebase.rules.txt file
3. Delete and replace the old rules for Firebase with the new rules
4. indexes will be created automatically from your console when you fetch your first items for the first time (after database has been set up and pages have been created the console will prompt it)
5. Do same for Storage

# Toastify

1. Allready in the package.json file
   npm i react-toastify
2. import { ToastContainer } from "react-toastify";
   import "react-toastify/dist/ReactToastify.css";
3. Create your gist on the toastify website and copy the container into App.js so that it is everywhere available
4. Inside the file where you need to use it
   import { toast } from "react-toastify";
5. Output error messages with
   toast.error("Something went§ wrong")

# UUID allready installed with package.json

# hsa-firebase-tailwind

# Private Routes

In a React project, a private route serves the purpose of restricting access to certain pages or components based on whether a user is authenticated or not.

Here's how it typically works:

Authentication: When a user logs in or authenticates, their authentication status is usually stored in the application's state or a global context.
Routing: Private routes are then used to guard certain routes or components that should only be accessible to authenticated users. When a user tries to access a private route, the application checks if they are authenticated. If they are, they are allowed to proceed to the desired page. If not, they are redirected to a login page or denied access in some other way.
Authorization: Additionally, private routes can also be used for authorization purposes, ensuring that only users with specific roles or permissions can access certain parts of the application.
By using private routes, you can enhance the security and user experience of your React application by controlling access to sensitive or restricted content.

- Setting it up

1. At first you set up in the Private Route a dummy state variable for being logged in as false. Later you will re[lace this value with what is in firebase
2. So the logic would be: when you are logged in the private route will return whatever is in this private route ie <Outlet> which comes from react-router-dom, otherwise redirect the user to the login page with Navigate()

export default function PrivateRoute() {
const { loggedIn, checkingStatus } = useAuthStatus();

return loggedIn ? <Outlet /> : <Navigate to="/login" />;

3. Now create the route in App.js

   - The Profile should be put inside this private route, because only the logged in user should be able to see his profile page
     <Route path="/profile" element={<PrivateRoute />}>
     <Route path="/profile" element={<Profile />} />
     </Route>

- Since loggedIn is set to false, nobody can log into the profile page is the route is set like here.

4. Now, instead of have the loggedIn set to false, you need to have a hook that get this value from firebase.

- Create a custom hook in your hook folder called useAuthStatus.jsx
- Start with giving the hook some status for loggedIn and setLoggedIn with a default value of false because we assume the user has not been authenticated. When authenticated, it will be set to true.
- We also need another status variable that checks the status of whether the information has come in from firebase or not, so that we can add the loading effect if not. This is defaulted to true because we start with checking
- Then we add a useEffect to check if the person is authenticated or not. For this we need getAuth() and onAuthStateChanged() which gives us the user so that we can check if the user exists or not. If the user exists we set the login status to true and the checkingStatus to false so the loading effect switches off. If the user is authenticated we return the loggedIn and checkingStatus, which info is need inside the Private Routes

export function useAuthStatus() {
const [loggedIn, setLoggedIn] = useState(false);
const [checkingStatus, setCheckingStatus] = useState(true);

useEffect(() => {
const auth = getAuth();
console.log(auth);
onAuthStateChanged(auth, (user) => {
if (user) {
setLoggedIn(true);
}
setCheckingStatus(false);
});
}, []);
return { loggedIn, checkingStatus };
}

import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

5. Now inside the private route you can replace the manual set loggedIn state with the loogedIn hook and checkingStatus hooks you now have from inside the useAuthStatus custom hook.
   const {loggedIn, checkingStatus} = useAuthStatus()

6. Final PrivateRoute:

export default function PrivateRoute() {
const { loggedIn, checkingStatus } = useAuthStatus();
if (checkingStatus) {
return <Spinner />;
}
return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}
