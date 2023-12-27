import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      id="about-us"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl  capitalize font-bold lg:max-w-lg">
          We provide you
          <br />
          <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
        Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11"><Button label="View Details" /></div>
      </div>
      <div className="flex-1 flex items-center justify-center ">
        <img src={shoe8} alt="shoe" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
