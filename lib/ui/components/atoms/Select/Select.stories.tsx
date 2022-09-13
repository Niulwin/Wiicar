import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from '.';

export default {
  title: 'atoms/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'Spanish',
  handleChange: (value) => console.info(`Selected value ${value}`),
  style: { width: '100%' },
  options: [
    { value: 'Spanish', title: 'Spanish' },
    { value: 'English', title: 'English' }
  ]
};
