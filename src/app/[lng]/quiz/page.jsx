"use client"
import Question from "@/app/components/Question/Question";
import Result from "@/app/components/Result/Result";
import React, { useEffect, useState } from "react";

export default function Quiz({ params: { lng } }) {
    const [answers, setAnswers] = useState([])
    const [questionsOrder, setQuestionsOrder] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect(() => {
        const order = getQuestionsOrder()
        setCurrentQuestion(order.pop())
        setQuestionsOrder(order)
    }, [])

    const getQuestionsOrder = () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7]
        const result = []

        for (let i = 0; i < 7; i ++) {
            const randomIndex = Math.floor(Math.random() * numbers.length)
            const selectedNumber = numbers.splice(randomIndex, 1)[0]
            result.push(selectedNumber)
        }

        return result
    }

    const handleSelectAnswer = (letter) => {
        const currentAnswers = [...answers, letter]
        setAnswers(currentAnswers)
        const currentOrder = questionsOrder
        setCurrentQuestion(currentOrder.pop())
        setQuestionsOrder(currentOrder)
    }

    return (
      <div>
        {currentQuestion === 0 ? (
                <p>Loading...</p>
            ) : currentQuestion === undefined ? (
                <Result lng={lng} answers={answers} />
            ) : (
                <Question lng={lng} questionNumber={currentQuestion} handleSelectAnswer={handleSelectAnswer} />
            )
        }
      </div>
    );
  }