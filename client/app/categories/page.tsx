export default function CategoriesPage() {
  const categories = [
    "Action",
    "Drama",
    "Comedy",
    "Sci-Fi",
    "Thriller",
    "Romance",
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
          Browse by Categories
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Explore movies organized by genre and category.
        </p>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-3xl font-semibold mb-4 text-red-600">
                {category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {Array(6)
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 border border-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-500 hover:scale-105 hover:shadow-lg hover:border-red-500 hover:bg-red-50 transition-all cursor-pointer"
                    >
                      Movie {index + 1}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
