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
   toast.error("Something went wrong")

# UUID allready installed with package.json
# hsa-firebase-tailwind
