import React from "react";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className={`pb-16 pt-8 flex flex-col items-center border-t-2 border-sec-background`}
    >
      <span className="text-primary-text mb-2 text-center">
        You can call us directly at (281)-931-6558
      </span>
      <span className="text-secondary-text text-center">
        Thank you for visiting our website today!
      </span>
    </div>
  );
};

export default Footer;
