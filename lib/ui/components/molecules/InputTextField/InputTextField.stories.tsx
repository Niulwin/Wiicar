import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputTextField } from '.';

export default {
  title: 'atoms/InputTextField',
  component: InputTextField
} as ComponentMeta<typeof InputTextField>;

const Template: ComponentStory<typeof InputTextField> = (args) => (
  <InputTextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
