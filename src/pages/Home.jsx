import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to the Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Latest News</h2>
            {/* Display latest news here */}
            <p className="text-gray-600">No news available at the moment.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Outstanding Performance</h2>
            {/* Display outstanding performance metrics here */}
            <p className="text-gray-600">No outstanding performance metrics available.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Updates</h2>
          {/* Display recent updates here */}
          <p className="text-gray-600">No updates available at the moment.</p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
