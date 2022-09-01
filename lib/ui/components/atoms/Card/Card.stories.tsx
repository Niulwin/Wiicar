import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '.';

export default {
  title: 'atoms/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => null,
  children: <div></div>,
  mHeight: '',
  justify: ''
};
