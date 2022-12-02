import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loading } from '.';

export default {
  title: 'atoms/Loading',
  component: Loading
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
