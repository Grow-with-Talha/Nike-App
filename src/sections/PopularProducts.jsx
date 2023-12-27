import { motion } from "framer-motion"
import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  const variants = {
    hidden: {
      opacity: 0.9
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold ">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="font-montserrat lg:max-w-lg text-slate-gray">Experience top-notch quality and style with our sought after selections. Discover a world of comfort, design, and value.</p>
        <motion.div variants={variants} initial="hidden" animate="show" className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PopularProducts