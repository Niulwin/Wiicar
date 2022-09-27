import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chip } from '.';

export default {
  title: 'atoms/Chip',
  component: Chip
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  background: 'primary',
  color: 'light',
  title: 'N',
  variant: 'contained'
};
