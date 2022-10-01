import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextFieldControlled } from '.';

export default {
  title: 'atoms/TextFieldControlled',
  component: TextFieldControlled
} as ComponentMeta<typeof TextFieldControlled>;

const Template: ComponentStory<typeof TextFieldControlled> = (args) => (
  <TextFieldControlled {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Field 1',
  placeholder: 'Field 1',
  value: 1,
  onChange: () => null
};
