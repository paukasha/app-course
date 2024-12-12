import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'shared/ui/Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;
export const Primary: Story = {
    args: {
        trigger: <Button>Кнопка</Button>,
        items: [
            { content: 'first' },
            { content: 'second' },
            { content: 'first' },
        ],
    },
};
