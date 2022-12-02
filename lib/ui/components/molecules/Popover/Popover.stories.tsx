import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Popover } from '.';

export default {
  title: 'atoms/Popover',
  component: Popover
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  background: 'primary',
  color: 'light',
  title: 'N',
  variant: 'contained'
};
