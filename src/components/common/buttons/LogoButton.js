import Image from 'next/image';

const LogoButton = ({
  /*custom style*/
  text = "",
  theme = "dark",  // Default image order
  size = "medium",  // Default size is medium
  Isinline= true,

  /*tailwind style*/
  border = "border",
  bgColor = "bg-black",  // Default background color
  textColor = "text-white",  // Default text color
  hoverBgColor = "hover:bg-white",  // Default hover background color
  hoverTextColor = "hover:text-black",  // Default hover text color
  hoverBorderColor = "hover:border-black",  // Default border color
  borderColor = "border-white",  // Default border color
   rounded = "rounded-full",
  font="font-medium"
}) => {
  // Dynamically set padding, text size, and logo size based on the size prop
  const buttonSize = size === "small" ? "p-2 text-sm" : "p-2.5 text-md";
  const logoSize = size === "small" ? "w-3 h-3" : "w-4 h-4";  // Adjust logo size for small size
  const inline= Isinline === true ? "inline-flex" : "flex";  // Adjust logo size for small size
  return (
    <div className='text-center'>
    <div
      className={` logo-button ${inline} ${font} justify-center items-center gap-2 cursor-pointer mt-4  ${rounded} ${border} ${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor} ${borderColor} ${hoverBorderColor} ${buttonSize} ${font}`}
    >
      <span>{text}</span>
      {theme === "dark" && (
        <>
          <div className={`logo1 relative ${logoSize}`}>
            <Image src="/logos/ak-1.png" alt="Logo 1" fill className="contain" />
          </div>
          <div className={`logo2 relative ${logoSize}`}>
            <Image src="/logos/ak-2.png" alt="Logo 2" fill className="contain" />
          </div>
        </>
      )}
      {theme === "clear" && (
        <>
          <div className={`logo1 relative ${logoSize}`}>
            <Image src="/logos/ak-2.png" alt="Logo 2" fill className="contain" />
          </div>
          <div className={`logo2 relative ${logoSize}`}>
            <Image src="/logos/ak-1.png" alt="Logo 1" fill className="contain" />
          </div>
        </>
      )}
    </div></div>
  );
};

export default LogoButton;

