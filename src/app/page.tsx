import Footer from "@/components/footer/Footer";
import Goals from "@/components/goals/Goals";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="bg-wrapperBlack overflow-x-hidden px-[24px] flex justify-center w-full h-full min-h-dvh ">
      <div className="w-full h-full max-w-[1440px]">
        <div className="min-h-dvh h-full flex flex-col">
          <Header />
          <Hero />
        </div>
        <Goals />
        <Footer />
      </div>
    </div>
  );
}
