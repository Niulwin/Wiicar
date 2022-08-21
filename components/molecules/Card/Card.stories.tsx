import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from '.';

export default {
  title: 'molecules/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonTitle: 'A button',
  label: 'Hello'
};
