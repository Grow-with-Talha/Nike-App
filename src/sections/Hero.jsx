import { useState } from "react";

import { shoes, statistics } from "../constants";

import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { bigShoe1 } from "../assets/images";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <motion.p
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="text-xl font-montserrat text-coral-red"
        >
          Our Summer collections
        </motion.p>

        <motion.h1
          initial={{ scale: 0.75, opacity: 0.75, zIndex: 10 }}
          animate={{ scale: 1, opacity: 1, zIndex: 10 }}
          transition={{ type: "just" }}
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </motion.h1>
        <motion.p
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </motion.p>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} whileHover={{ scale: 1.1}} whileTap={{ scale: 0.95}}>
          <Button label="Shop now" Icon={ArrowRight} />
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="visible" className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <motion.div variants={item} initial="hidden" animate="visible" key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <motion.img
        initial={{
          x: 40
        }}
        animate={{ x: 0}}
        key={bigShoeImg}
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10 drop-shadow-2xl filter"
        />

        <motion.div
        initial={{
          x: 100
        }} animate={{ x: 0}} className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <motion.div  key={index}>
              <ShoeCard
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
