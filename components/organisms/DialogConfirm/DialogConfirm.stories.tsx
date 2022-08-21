import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DialogConfirm } from './DialogConfirm';

export default {
  title: 'organism/DialogConfirm',
  component: DialogConfirm
} as ComponentMeta<typeof DialogConfirm>;

const Template: ComponentStory<typeof DialogConfirm> = (args) => (
  <DialogConfirm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  buttonTitle: 'A button'
};
