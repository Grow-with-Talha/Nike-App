import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 max-lg:flex-col">
      <div className="flex flex-col items-start ">
        <a href="">
          <img src={footerLogo} height={46} width={150}  alt="" />
        </a>
        <p className="text-white-400 sm:max-w-sm mt-6  text-base font-montserrat leading-7 ">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
        <div className="flex items-center mt-8 gap-5">
          {socialMedia.map((icon) => (
            <div className="flex items-center justify-center h-12 w-12 bg-white rounded-full " key={icon.alt}>
              <img src={icon.src} alt={icon.alt} height={24} width={24} className="" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20  flex-wrap">
        {footerLinks.map((section) => (
          <div key={section}>
            <h2 className="text-white font-montserrat text-2xl font-medium mb-6 leading-normal">{section.title}</h2>
            <ul className="">
              {section.links.map((link) => (
                <li className="text-white-400 font-montserrat leading-normal hover:text-slate-gray cursor-pointer  mt-3 text-base" key={link.name}><a href={link.link}>{link.name}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 items-center justify-start gap-2  font-montserrat cursor-pointer ">
          <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0" />
          <p className="">Copy Right, all rights reserved </p>
        </div>
        <p className="font-montserrat cursor-pointer ">Terms & conditions</p>
      </div>
    </footer>
  )
}

export default Footer