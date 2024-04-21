import React from "react";
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <section className="flex flex-col items-center justify-center space-y-4 px-6 py-12">
      <h1 className="text-3xl text-center font-bold">Beyond this point there is only wahala</h1>
      <img src="https://images.unsplash.com/photo-1615200198479-5e59f4a9e0b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0b3AlMjBzaWdufGVufDB8fDB8fHww" alt="Stop Sign" className="w-32 h-auto rounded-2xl" />
      <p className="text-xl text-center">You no fit go here. Ask Oga at the top for permission to enter.</p>
      <Link to="/" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out text-lg">
        I'm getting the hell out of here
      </Link>
    </section>
  );
}
