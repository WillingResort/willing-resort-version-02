import HeroSlider from "@/components/home/hero-slider";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <div className="container mt-[40px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <h1>Willing Resort - Fact Sheet        </h1>
        <div className="bg-gray-300 p-4">Item 1</div>
        <div className="bg-gray-300 p-4">Item 2</div>
        <div className="bg-gray-300 p-4">Item 3</div>
      </div>

    </div>
  );
}
