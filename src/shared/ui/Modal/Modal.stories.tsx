import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/provider/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;
export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda, deserunt ea fugiat harum nobis, optio placeat possimus quis tempore ullam veniam vitae! Adipisci autem debitis, eum ipsa ratione sequi! A ad aliquam debitis dignissimos dolorem ducimus eum eveniet, facilis, fugit nesciunt numquam perferendis perspiciatis praesentium ratione tempora temporibus voluptatibus!',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda, deserunt ea fugiat harum nobis, optio placeat possimus quis tempore ullam veniam vitae! Adipisci autem debitis, eum ipsa ratione sequi! A ad aliquam debitis dignissimos dolorem ducimus eum eveniet, facilis, fugit nesciunt numquam perferendis perspiciatis praesentium ratione tempora temporibus voluptatibus!',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
