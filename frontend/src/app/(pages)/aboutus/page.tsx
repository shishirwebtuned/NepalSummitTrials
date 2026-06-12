import AboutSection from "./Components/AboutSection";
import OurStory from "./Components/OurStory";
import Setsusapart from "./Components/Setsusapart";
import Image from "next/image";
import FAQ from "@/components/FAQ/FAQ";

import HoverPersonCard from "@/components/HoverPersonCard";
import HomeBanner from "../home/Components/HomeBanner";
import ContactUs from "./Components/ContactUs";
import Topsection from "@/components/Topsection";

export default function Page() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Topsection
        title="Explore the Himalayas"
        image="/images/about/aboutbg.png"
      />
      <AboutSection />
      <OurStory />
      <Setsusapart />
      {/* <HomeBanner /> */}
      {/* <FAQ reverse /> */}

      {/* <div className="-translate-y-5">
        <HoverPersonCard
          title=" Step into the Wild. Discover Trails That Change You."
          desc="Join guided treks to breathtaking destinations. Nature is calling."
          buttonText="Discover more"
          image="/images/about/maleHiker.png"
        />
      </div> */}
      <ContactUs />
    </div>
  );
}
