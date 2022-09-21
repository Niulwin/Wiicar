import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SelectField } from '.';

export default {
  title: 'atoms/SelectField',
  component: SelectField
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => (
  <SelectField {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Field 1',
  placeholder: 'Field 1',
  value: 1,
  onChange: () => null
};
