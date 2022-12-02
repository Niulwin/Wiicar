import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'organism/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'A modal title',
  isVisible: true,
  children: <p>Hola mundo</p>,
  onAccept: () => console.log('Acepto'),
  onCancel: () => console.log('Cancelo')
};
