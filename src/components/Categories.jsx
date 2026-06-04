function Categories() {
  const categories = [
    { emoji: "🍕", name: "Pizza" },
    { emoji: "🍔", name: "Burger" },
    { emoji: "🥤", name: "Drinks" },
    { emoji: "🍰", name: "Desserts" },
  ];

  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold text-center mb-12">
        Explore Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {categories.map((item) => (
          <div
            key={item.name}
            className="bg-white p-8 rounded-2xl shadow-md text-center hover:scale-105 transition"
          >
            <div className="text-6xl mb-4">{item.emoji}</div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;