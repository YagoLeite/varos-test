import Footer from "@/components/footer/Footer";
import FormSection from "@/components/form/FormSection";
import Goals from "@/components/goals/Goals";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="bg-wrapperBlack overflow-x-hidden px-[24px] flex justify-center w-full h-full min-h-dvh pb-[30px] ">
      <div className="w-full h-full max-w-[1440px] flex flex-col gap-[200px]">
        <div className="min-h-dvh h-full flex flex-col ">
          <Header />
          <Hero />
        </div>
        <Goals />
        <Testimonials />
        <FormSection />
        <Footer />
      </div>
    </div>
  );
}
