import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Content } from './Content';

export default {
  title: 'atoms/Card',
  component: Content
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: <div></div>
};
