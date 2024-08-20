import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    themeB: ButtonTheme,
};
export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    themeB: ButtonTheme.CLEAR,
};
export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    themeB: ButtonTheme.BACKGROUND,
};

export const SizeM = Template.bind({});
SizeM.args = {
    children: '>',
    size: 'size_m',
    symbol: true,
    themeB: ButtonTheme.BACKGROUND,
};
export const SizeXL = Template.bind({});
SizeXL.args = {
    children: '>',
    size: 'size_xl',
    symbol: true,
    themeB: ButtonTheme.BACKGROUND,
};
