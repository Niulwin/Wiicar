import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PhoneNumberField } from '.';

export default {
  title: 'atoms/PhoneNumberField',
  component: PhoneNumberField
} as ComponentMeta<typeof PhoneNumberField>;

const Template: ComponentStory<typeof PhoneNumberField> = (args) => (
  <PhoneNumberField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
