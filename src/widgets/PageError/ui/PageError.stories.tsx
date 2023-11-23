import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator';
import { PageError } from './PageError';

export default {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof PageError>;

const Template: StoryFn<typeof PageError> = (args) => <PageError {...args} />;

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
