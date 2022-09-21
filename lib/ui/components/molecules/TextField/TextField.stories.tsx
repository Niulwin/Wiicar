import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextField } from '.';

export default {
  title: 'atoms/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Field 1',
  placeholder: 'Field 1',
  value: 1,
  onChange: () => null
};
