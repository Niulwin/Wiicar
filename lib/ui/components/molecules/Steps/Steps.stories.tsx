import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardOption } from '.';

export default {
  title: 'atoms/CardOption',
  component: CardOption
} as ComponentMeta<typeof CardOption>;

const Template: ComponentStory<typeof CardOption> = (args) => (
  <CardOption {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => null,
  icon: 'plus',
  title: 'Card Option'
};
