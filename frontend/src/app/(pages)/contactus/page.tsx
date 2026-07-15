import Topsection from "@/components/Topsection";
import GetInTouch from "./Components/GetInTouch";
import Emergency from "./Components/Emergency";
import Branches from "./Components/Branches";

const page = () => {
  return (
    <div>
      <Topsection
        title="Your Journey Starts With a Message"
        image="/images/about/aboutbg.png"
      />
      <GetInTouch />
      {/* <Emergency /> */}

      <div className="w-full mt-4">
        <div className="w-full ">


          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7066.260819533156!2d85.31525100000002!3d27.682364000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19628ba30cb5%3A0x7927837c54013d33!2sWeb%20Tuned%20Studio!5e0!3m2!1sen!2snp!4v1781159105021!5m2!1sen!2snp"
            className="w-full h-[30rem] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* <Branches /> */}
    </div>
  );
};

export default page;
