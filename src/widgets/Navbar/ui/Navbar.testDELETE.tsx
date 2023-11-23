import { screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Navbar } from './Navbar';

describe('Navbar', () => {
    test('Navbar test', () => {
        renderWithTranslation(<Navbar />);
        expect(screen.getByTestId('Navbar')).toBeInTheDocument();
    });
});
