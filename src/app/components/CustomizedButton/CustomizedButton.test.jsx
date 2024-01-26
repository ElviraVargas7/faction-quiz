import { fireEvent, render, waitFor } from '@testing-library/react';
import CustomizedButton from './CustomizedButton';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))

describe("<CustomizedButton />", () => {
    beforeEach(() => {
        useRouter.mockReturnValue({
          push: jest.fn(),
        })
        jest.clearAllMocks();
    })

    it('should render language button successfully', async () => {
        const { getByTestId } = render(<CustomizedButton url={"es"} languageText={"Español"} lng={"en"} />);
        await waitFor(() => {
            expect(getByTestId('language-es')).toBeInTheDocument();
        });
    });

    it('should render start button successfully', async () => {
        const { getByTestId } = render(<CustomizedButton lng={"en"} />);
        await waitFor(() => {
            expect(getByTestId('start')).toBeInTheDocument();
        });
    });

    describe("when button is clicked", () => {
        it("should push to correct url", async () => {
            const { getByTestId } = render(<CustomizedButton lng={"en"} />);

            await waitFor(() => {
                const settingsButton = getByTestId('start')
                expect(settingsButton).toBeInTheDocument();
                
                fireEvent.click(settingsButton)

                const useRouterMock = useRouter.mock.results[0].value;
                expect(useRouterMock.push).not.toHaveBeenCalledWith('/es');
                expect(useRouterMock.push).not.toHaveBeenCalledWith('/en');
                expect(useRouterMock.push).toHaveBeenCalledWith('/quiz');
            });
        })
    })
})