import React from "react";

import Buttons from "../../src/components/Buttons/Buttons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Buttons",
  component: Buttons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bg: "red",
    size: 140,
    label: "Click me",
  },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Buttons {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Click me",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 180,
  label: "Click me",
  bg: "green",
};

export const Large = Template.bind({});
Large.args = {
  size: 200,
  label: "Button",
  bg:"#ccc"
};

export const Small = Template.bind({});
Small.args = {
  size: 100,
  label: "Button",
};
