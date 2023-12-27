const Button = ({ label, Icon, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button
      className={`flex items-center justify-center px-7 py-4 gap-2 font-montserrat text-lg leading-none 
      ${backgroundColor ? backgroundColor : "bg-coral-red"}
      ${borderColor ? borderColor : "border-coral-red"}
      ${textColor ? textColor : "text-white"}
      ${fullWidth && "w-full"}
       border rounded-full `}
    >
      {label}
      {Icon && <Icon className={"ml-2 rounded-full w-5 h-5 "} />}
    </button>
  );
};

export default Button;
