import "./Question.scss"
import React from 'react'
import { useTranslation } from '@/app/i18n/client'

const Question = ({ lng }) => {
  const { t } = useTranslation(lng, 'questions')
  const question = 6
  const answersLetters = ["a", "b", "c", "d", "e"]

  return (
    <div className='question'>
        <div className="question__title">
            <h1>{t(`questions:${question}:question`)}</h1>
        </div>

        <div className="question__divider"></div>

        <div className="question__answers">
            {answersLetters.map((letter) => {
                return (
                    <div className="answer">
                        <p className="answer__text">{t(`questions:${question}:${letter}`)}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Question