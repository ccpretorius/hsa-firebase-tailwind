import Footer from "../components/Footer";

export default function Guest() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 px-4">Welcome to our Guest Portal</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Our Presentation</h2>
            {/* Display latest news here */}
            <p className="text-gray-600">No presentations at this time</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Private Corner</h2>
            {/* Display outstanding performance metrics here */}
            <p className="text-gray-600">Our plans for you</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Next steps</h2>
          {/* Display recent updates here */}
          <p className="text-gray-600">No updates available at the moment.</p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
