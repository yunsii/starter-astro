import React from "react";

export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { onClick, children } = props;
  return (
    <button className="text-lg border-2 border-cyan-500 px-2 rounded" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
