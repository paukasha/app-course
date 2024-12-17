import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'shared/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof EditableProfileCardHeader>;

type Story = StoryObj<typeof EditableProfileCardHeader>;
export const Primary: Story = {
    args: {},
};
