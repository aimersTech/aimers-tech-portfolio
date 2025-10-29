import { TTypography } from "../types/TTypography";


const ButtonText = ({ children, weight = "bold", className }: TTypography) => {
  const fontWeight = weight === "bold" ? "font-bold" : "font-normal";

  return (
    <h4 className={`text-[18px] ${fontWeight} leading-[130%] ${className}`}>
      {children}
    </h4>
  );
};

export default ButtonText;
