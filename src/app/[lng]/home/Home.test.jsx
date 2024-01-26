import { render, waitFor } from '@testing-library/react';
import Home from './Home';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))

describe("<Home />", () => {
    it('should render title, languages and start buttons successfully', async () => {
        const { getByTestId } = render(<Home lng={"en"} />);
        await waitFor(() => {
            expect(getByTestId('switcher-title')).toBeInTheDocument();
            expect(getByTestId('language-en')).toBeInTheDocument();
            expect(getByTestId('language-es')).toBeInTheDocument();
            expect(getByTestId('start')).toBeInTheDocument();
        });
    });
})