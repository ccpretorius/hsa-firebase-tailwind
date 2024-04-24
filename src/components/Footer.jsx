import React from "react";

const Footer = () => {
  const tempHandle = () => {};
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@myhemingways.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: LCCI Building, Dr Nurudeen Olowopopo Road, Aluasa, Ikeja, Lagos, Nigeria</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <li>
                  <button onClick={tempHandle} style={{ appearance: "none", background: "none", border: "none", padding: 0, color: "lightblue", textDecoration: "underline", cursor: "pointer" }}>
                    Trainees
                  </button>
                </li>
              </li>
              <li>
                <button onClick={tempHandle} style={{ appearance: "none", background: "none", border: "none", padding: 0, color: "lightblue", textDecoration: "underline", cursor: "pointer" }}>
                  About us
                </button>
              </li>
              <li>
                <button onClick={tempHandle} style={{ appearance: "none", background: "none", border: "none", padding: 0, color: "lightblue", textDecoration: "underline", cursor: "pointer" }}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={tempHandle} style={{ appearance: "none", background: "none", border: "none", padding: 0, color: "lightblue", textDecoration: "underline", cursor: "pointer" }}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <form>
              <input type="email" placeholder="Enter your email" className="w-full py-2 px-3 rounded bg-gray-700 text-white" />
              <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
