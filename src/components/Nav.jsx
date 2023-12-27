import { motion } from "framer-motion";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="w-full padding-x py-8 z-10 absolute ">
      <nav className="flex items-center justify-between max-container">
        <motion.a initial={{ y: -20, scale: -0.5}} animate={{ y: 0, scale: 1}} transition={{ type: "spring", stiffness: "250"}}  href="/">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </motion.a>
        <motion.ul initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ staggerChildren: 0.4, delayChildren: 0.3, }} className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((link, index) => (
            <motion.li key={index} className="">
              <a
                className="font-montserrat leading-normal text-lg text-slate-500"
                href={link.href}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <div className="hidden max-lg:block cursor-pointer">
            <img src={hamburger} alt="Hamburger" width={24} height={24}  />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
