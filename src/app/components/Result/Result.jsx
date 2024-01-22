"use client"
import React, { useEffect, useState } from "react";
import { useTranslation } from '@/app/i18n/client'
import { faction } from "@/app/constants/factions";

const Result = ({ lng, answers }) => {
    const { t } = useTranslation(lng, 'results')

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

    return (
        <div>
            <h1>{t(`results:${resultingFaction}:faction`)}</h1>
            <p>{t(`results:${resultingFaction}:explanation`)}</p>
        </div>
    )
}

export default Result;