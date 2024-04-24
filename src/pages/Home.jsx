import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 px-4">Welcome to the Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Popular with our members</h2>
            {/* Display latest news here */}
            <p className="text-gray-600">Watch this space</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Ways to see</h2>
            {/* Display outstanding performance metrics here */}
            <p className="text-gray-600">Broaden your mind, free your spirit</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Member Moments</h2>
            {/* Display latest news here */}
            <p className="text-gray-600">Shared experiences</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Hemingway's Travel Academy</h2>
            {/* Display outstanding performance metrics here */}
            <p className="text-gray-600">Training opportunities, Marketing certificates, Job openings</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Our Travel Blog</h2>
            {/* Display latest news here */}
            <p className="text-gray-600">Travel for wealth</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Newsletters</h2>
            {/* Display outstanding performance metrics here */}
            <p className="text-gray-600">Most liked</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Staff travels</h2>
            {/* Display outstanding performance metrics here */}
            <p className="text-gray-600">Fun trips and company sponsored educationals</p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
