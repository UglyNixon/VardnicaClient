import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = () => <Navbar />;

export const Light = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.DARK)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.LIGHT)];
