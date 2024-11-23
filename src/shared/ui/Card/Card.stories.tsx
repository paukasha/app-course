import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'shared/ui/Text/Text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;
export const Primary: Story = {
    args: {
        children: <Text text="component Text for card" title="title for card" />,
    },
};
