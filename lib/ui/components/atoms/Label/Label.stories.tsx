import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Label } from '.';

export default {
  title: 'atoms/Label',
  component: Label
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => null,
  children: <div></div>
};
