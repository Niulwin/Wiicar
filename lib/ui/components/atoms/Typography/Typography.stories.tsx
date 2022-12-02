import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from './';

export default {
  text: 'atoms/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'body1',
  children: 'Hola mundo'
};
