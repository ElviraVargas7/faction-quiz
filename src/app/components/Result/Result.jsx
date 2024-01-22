"use client"
import React from "react";
import { useTranslation } from '@/app/i18n/client'

const Result = ({ lng, answers }) => {
    const { t } = useTranslation(lng, 'results')
    return (
        <div>
            {t("1")}
            {answers}
        </div>
    )
}

export default Result;