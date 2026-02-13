import Image from "next/image";
import Header from "../../component/H-header";
import HeroSection from "../../component/H-herosection";
import AboutPlumbers from "../../component/H-plumber-sec";
import ServicesSection from "../../component/H-service";
import HomeCareSection from "../../component/H-like";
import Testimonials from "../../component/H-testimonial";
import Footer from "../../component/H-footer";

export default function Home() {
  return (
<div>
  {/* <Header/> */}
  <HeroSection/>
  <AboutPlumbers/>
  <ServicesSection/>
  <HomeCareSection/>
  <Testimonials/>
  {/* <Footer/> */}
</div>
  );
}
