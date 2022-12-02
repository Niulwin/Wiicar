import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tabs } from '.';

export default {
  title: 'atoms/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
