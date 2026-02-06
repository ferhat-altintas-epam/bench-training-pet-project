export default function RecommendedPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
          Recommended for You
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Discover movies tailored to your taste based on your viewing history.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div
              key={item}
              className="bg-gray-100 border border-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-500 hover:scale-105 hover:shadow-lg hover:border-red-500 hover:bg-red-50 transition-all cursor-pointer"
            >
              Movie {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
