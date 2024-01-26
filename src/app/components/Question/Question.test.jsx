import { fireEvent, render, waitFor } from '@testing-library/react';
import Question from './Question';

describe("<Question />", () => {
    const mockedQuestionNumber = 1
    const mockedSelectAnswer = jest.fn()
    
    it('should render title and languages buttons successfully', async () => {
        const { getByTestId } = render(
            <Question 
                lng={"en"} 
                questionNumber={mockedQuestionNumber} 
                handleSelectAnswer={mockedSelectAnswer}
            />
        );
        await waitFor(() => {
            expect(getByTestId('question-1')).toBeInTheDocument();
            expect(getByTestId('answer-a')).toBeInTheDocument();
            expect(getByTestId('answer-b')).toBeInTheDocument();
            expect(getByTestId('answer-c')).toBeInTheDocument();
            expect(getByTestId('answer-d')).toBeInTheDocument();
            expect(getByTestId('answer-e')).toBeInTheDocument();
        });
    })

    describe("when an answer is clicked", () => {
        it("should call handleSelectAnswer", async () => {
            const { getByTestId } = render(
                <Question 
                    lng={"en"} 
                    questionNumber={mockedQuestionNumber} 
                    handleSelectAnswer={mockedSelectAnswer}
                />
            )
            await waitFor(() => {
                const selectedAnswer = getByTestId('answer-a')
                expect(mockedSelectAnswer).not.toBeCalled()
                fireEvent.click(selectedAnswer)
                expect(mockedSelectAnswer).toBeCalled()
            })
        })
    })
})