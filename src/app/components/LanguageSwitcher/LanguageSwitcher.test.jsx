import { render, waitFor } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))

describe("<LanguageSwitcher />", () => {
    it('should render title and languages buttons successfully', async () => {
        const { getByTestId } = render(<LanguageSwitcher lng={"en"} />);
        await waitFor(() => {
            expect(getByTestId('switcher-title')).toBeInTheDocument();
            expect(getByTestId('language-en')).toBeInTheDocument();
            expect(getByTestId('language-es')).toBeInTheDocument();
        });
    });
})