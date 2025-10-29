import React from "react";

const GreenArrowIcon = ({ className, isLink = false }: { className?: string; isLink?: boolean }) => {
  return (
    <div className="w-full h-full block">
      <svg
        width="17"
        height="15"
        viewBox="0 0 17 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block"
      >
        <path
          d="M1.40625 6.61133C0.853965 6.61133 0.40625 7.05904 0.40625 7.61133C0.40625 8.16361 0.853965 8.61133 1.40625 8.61133V6.61133ZM16.1134 8.31843C16.5039 7.92791 16.5039 7.29475 16.1134 6.90422L9.7494 0.54026C9.35887 0.149736 8.72571 0.149736 8.33518 0.54026C7.94466 0.930785 7.94466 1.56395 8.33518 1.95447L13.992 7.61133L8.33518 13.2682C7.94466 13.6587 7.94466 14.2919 8.33518 14.6824C8.72571 15.0729 9.35887 15.0729 9.7494 14.6824L16.1134 8.31843ZM1.40625 7.61133V8.61133H15.4062V7.61133V6.61133H1.40625V7.61133Z"
          fill="#28EBA7"
          className={`${
            isLink
              ? "group-hover/link:fill-bg-main-dark"
              : "group-hover:fill-bg-main-dark"
          } transition-all duration-[400ms] ease-in-out ${className}`}
        />
      </svg>
    </div>
  );
};

export default GreenArrowIcon;
