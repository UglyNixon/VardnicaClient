import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/componentRender/renderComponent';
import { Counter } from './Counter';

describe('Counter', () => {
    test('', () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment button', () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement button', () => {
        renderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
