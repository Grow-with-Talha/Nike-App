import {motion} from "framer-motion"
const ShoeCard = ({ bigShoeImg, changeBigShoeImage, imgURL }) => {
    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe) {
          changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return <motion.div whileTap={{ scale: 0.90}}  className={`border-2 shadow-xl shadow-black rounded-xl ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
  onClick={handleClick}>
    <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
        <img src={imgURL.thumbnail} width={127} height={103} className="object-contain" alt="" />
    </div>
  </motion.div>;

};

export default ShoeCard;
