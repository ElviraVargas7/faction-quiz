import { fireEvent, render, waitFor } from '@testing-library/react';
import Result from './Result';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))

describe("<Result />", () => {
    const mockedAnswers = ["a", "b", "e", "e", "e", "d", "c"]

    beforeEach(() => {
        useRouter.mockReturnValue({
          push: jest.fn(),
        })
        jest.clearAllMocks();
    })

    it('should render correct resulting faction successfully', async () => {
        const { getByTestId } = render(<Result lng={"en"} answers={mockedAnswers} />);
        await waitFor(() => {
            expect(getByTestId('erudite-title')).toBeInTheDocument();
            expect(getByTestId('erudite-explanation')).toBeInTheDocument();
        });
    });

    describe("when home button is clicked", () => {
        it("should push to home url", async () => {
            const { getByTestId } = render(<Result lng={"en"} answers={mockedAnswers} />);

            await waitFor(() => {
                const settingsButton = getByTestId('home-button')
                expect(settingsButton).toBeInTheDocument();
                
                fireEvent.click(settingsButton)

                const useRouterMock = useRouter.mock.results[0].value;
                expect(useRouterMock.push).not.toHaveBeenCalledWith('/es');
                expect(useRouterMock.push).toHaveBeenCalledWith('/en');
            });
        })
    })
})