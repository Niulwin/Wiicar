import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NumberCurrencyField } from '.';

export default {
  title: 'atoms/NumberCurrencyField',
  component: NumberCurrencyField
} as ComponentMeta<typeof NumberCurrencyField>;

const Template: ComponentStory<typeof NumberCurrencyField> = (args) => (
  <NumberCurrencyField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
