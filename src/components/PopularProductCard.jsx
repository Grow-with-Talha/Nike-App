import { Star } from "lucide-react";
import { motion } from "framer-motion";

const PopularProductCard = ({ imgURL, name, price }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: -1000,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.1,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      // whileInView={{ opacity: 1 }}
      initial="hidden"
      animate="show"
      className="flex flex-1 flex-col w-full max-sm:w-full"
    >
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <Star className="w-6 h-6 text-coral-red" />
        <p className="text-slate-gray text-xl font-montserrat leading-normal">
          (4.5)
        </p>
      </div>
      <h3 className="font-semibold text-2xl font-palanquin leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-montserrat font-semibold text-coral-red leading-normal ">
        {price}
      </p>
    </motion.div>
  );
};

export default PopularProductCard;
