"use client"

import "./Result.scss"
import React, { useEffect, useState } from "react";
import { useTranslation } from '@/app/i18n/client'
import { faction } from "@/app/constants/factions";
import { useRouter } from 'next/navigation'

const Result = ({ lng, answers }) => {
    const { t } = useTranslation(lng, 'results')
    const router = useRouter()

    const [resultingFaction, setResultingFaction] = useState("")

    useEffect(() => {
        const result = calculateAnswer()
        setResultingFaction(faction[result])
    }, [])

    const calculateAnswer = () => {
        const counts = {}

        answers.forEach(letter => {
            counts[letter] = (counts[letter] || 0) + 1
        })

        const countsValues = Object.values(counts)
        const maxValue = Math.max(...countsValues)

        for (const [letter, value] of Object.entries(counts)) {
            if (value === maxValue) return letter
        }
    }

    const handleRedirectHome = () => {
        router.push(`/${lng}`)
    }

    return (
        <div className="result">
            <div className="result__top-container">
                <h1 className="result__top-container__faction">{t(`results:${resultingFaction}:faction`)}</h1>

                <div className="result__top-container__divider"></div>

                <p className="result__top-container__explanation">{t(`results:${resultingFaction}:explanation`)}</p>
            </div>
            
            <div className="result__home-container">
                <div className="result__home-container__button" onClick={handleRedirectHome}>
                    <p className="result__home-container__button__text">{t("home")}</p>
                </div>
            </div>
        </div>
    )
}

export default Result;