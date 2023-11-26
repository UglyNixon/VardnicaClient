import { screen } from '@testing-library/react';

import {
    componentRender,
} from 'shared/lib/tests/componentRender/conponentRender';
import { Navbar } from './Navbar';

describe('Navbar', () => {
    test('Navbar test', () => {
        componentRender(<Navbar />);
        expect(screen.getByTestId('Navbar')).toBeInTheDocument();
    });
});
