import { screen } from '@testing-library/react';

import {
    renderComponent,
} from 'shared/lib/tests/componentRender/renderComponent';
import { Navbar } from './Navbar';

describe('Navbar', () => {
    test('Navbar test', () => {
        renderComponent(<Navbar />, {});
        expect(screen.getByTestId('Navbar')).toBeInTheDocument();
    });
});
