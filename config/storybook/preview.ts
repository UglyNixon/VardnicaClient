import type { Preview } from '@storybook/react';

import {
    StyleDecorator,
} from '../../src/shared/config/storybook/StyleDecorator';
import {
    ThemeDecorator,
} from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import {
    RouteDecorator,
} from '../../src/shared/config/storybook/RouteDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default {
    decorators: [
        StyleDecorator,
        RouteDecorator,
        ThemeDecorator(Theme.LIGHT),
    ],
};
