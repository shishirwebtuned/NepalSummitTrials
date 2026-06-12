import React from "react";
import Herosection from "./Components/Herosection";
import Aboutus from "./Components/Aboutus";
import Features from "./Components/Features";
import Offer from "./Components/Offer";
import Blankone from "./Components/Blankone";
import Offerg from "./Components/Offerg";
import WhyChoose from "./Components/Whychoose";
import Cardimages from "./Components/Cardimages";
import Testimonials from "./Components/Testimonials";
import OurTeam from "./Components/Ourteam";
import HomeBanner from "./Components/HomeBanner";
import { NewsAndTrends } from "./Components/NewsAndTrends";
import HoverpersonCard from "@/components/HoverPersonCard";
import FAQ from "@/components/FAQ/FAQ";

const HomePage = () => {
  return (
    <div>
      <Herosection />
      <Aboutus />
      <Features />
      <Offer />
      {/* <HomeBanner /> */}
      {/* <Blankone /> */}
      <OurTeam />
      <Offerg />
      {/* <WhyChoose /> */}
      <Cardimages />
      <Testimonials />
      {/* <div className="p-0">
        <HoverpersonCard
          title=" Step into the Wild. Discover Trails That Change You."
          desc="Join guided treks to breathtaking destinations. Nature is calling."
          buttonText="Discover more"
          image="/images/about/maleHiker.png"
          reverse
        />
      </div> */}
      <FAQ />
      {/* <NewsAndTrends /> */}
    </div>
  );
};

export default HomePage;
