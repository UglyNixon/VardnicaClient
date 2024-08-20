import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { WordsPage } from 'pages/WordsPage';

export default {
    title: 'pages/MainPage',
    component: WordsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof WordsPage>;

const Template: StoryFn<typeof WordsPage> = () => <WordsPage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
