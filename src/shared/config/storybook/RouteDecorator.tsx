import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (story:()=>StoryFn) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
