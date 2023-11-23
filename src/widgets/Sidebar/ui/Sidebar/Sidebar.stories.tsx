import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {
    className: '',
};
Light.decorators = [ThemeDecorator(Theme.DARK)];

export const Dark = Template.bind({});
Dark.args = {
    className: '',
};
Dark.decorators = [ThemeDecorator(Theme.LIGHT)];
