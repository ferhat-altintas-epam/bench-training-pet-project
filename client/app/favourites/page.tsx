export default function FavouritesPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Your Favourites</h1>
        <p className="text-gray-400 text-lg mb-8">
          Movies and shows you've marked as favourites will appear here.
        </p>
        
        {/* Placeholder for favourite movies grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-gray-800 rounded-lg h-64 flex items-center justify-center text-gray-500 hover:scale-105 transition-transform"
            >
              Movie {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
