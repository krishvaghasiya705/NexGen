import Herobanner from "@/components/homecomponents/herobanner";
import Ourwork from "@/components/homecomponents/ourwork";
import Reasonsection from "@/components/homecomponents/reason";
import Services from "@/components/homecomponents/services";
import Testimonial from "@/components/homecomponents/testimonial";

export default function Home() {
  return (
    <>
      <Herobanner />
      <Reasonsection />
      <Services />
      <Ourwork />
      <Testimonial />
    </>
  );
}
