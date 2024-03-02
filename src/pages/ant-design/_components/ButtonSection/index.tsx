import { Button } from "antd";

import React from "react";

export interface IButtonSectionProps {}

const ButtonSection: React.FC<IButtonSectionProps> = (props) => {
  return (
    <div className="flex gap-2">
      <Button type="primary">Hello</Button>
      <Button
        onClick={() => {
          console.log("hello");
        }}
      >
        Hello
      </Button>
    </div>
  );
};

export default ButtonSection;
