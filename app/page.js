import Body from "@/components/Body";
import CreatorSection from "@/components/CreaterSection";
import CryptoDictionary from "@/components/CryptoDictionary";
import Feature from "@/components/Feature";
import FeaturesContainer from "@/components/FeaturesContainer";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Body />
  <div className="relative -top-10 sm:-top-32">
     <FeaturesContainer />
  </div>
  <CreatorSection />
  <CryptoDictionary />
  <Footer />
   </>
  );
}
