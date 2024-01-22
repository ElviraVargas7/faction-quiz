"use client"

import "./LanguageSwitcher.scss"
import React from 'react'
import { useTranslation } from '@/app/i18n/client'
import SettingsButton from "../SettingsButton/SettingsButton";

const LanguageSwitcher = ({ lng }) => {
    const { t } = useTranslation(lng, 'language')

    return (
        <div className="language-switcher">
            <h1 className="language-switcher__title">{t("title")}</h1>
            <div className="language-switcher__languages">
                <div className="language-switcher__languages__language-button">
                    <SettingsButton url={"en"} text={"ENGLISH"} />
                </div>
                <div className="language-switcher__languages__language-button">
                    <SettingsButton url={"es"} text={"ESPAÑOL"} />
                </div>
            </div>
        </div>
    )
}

export default LanguageSwitcher