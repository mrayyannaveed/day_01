export default function ProductDetail({ params }: { params: { id: string } }) {
  return (
    <section className="bg-deepBlack min-h-screen px-6 py-32 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-serif text-amberGold mb-4">Perfume Name</h1>
        <p className="text-xl text-white/60">Perfume description goes here...</p>
        <p className="text-3xl font-semibold text-amberGold mt-6">$99</p>

        <button className="mt-8 px-6 py-3 bg-amberGold text-black rounded-2xl font-semibold">
          Add To Cart
        </button>
      </div>
    </section>
  );
}
