import React from "react";
import Button from "../Button";

export interface IReactHelloProps extends React.HTMLAttributes<HTMLDivElement> {}

const ReactHello: React.FC<IReactHelloProps> = (props) => {
  return (
    <div {...props}>
      <div className="flex gap-2">
        <Button
          onClick={() => {
            console.log("Hello, Astro.");
          }}
        >
          React Button
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Go to home page
        </Button>
      </div>
    </div>
  );
};

export default ReactHello;
