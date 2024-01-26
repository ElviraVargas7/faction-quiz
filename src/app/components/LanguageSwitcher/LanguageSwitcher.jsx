"use client"

import "./LanguageSwitcher.scss"
import React from 'react'
import { useTranslation } from '../../i18n/client'
import CustomizedButton from "../CustomizedButton/CustomizedButton";

const LanguageSwitcher = ({ lng }) => {
    const { t } = useTranslation(lng, 'language')

    return (
        <div className="language-switcher">
            <h1 
                className="language-switcher__title"
                data-testid="switcher-title"
            >
                {t("title")}
            </h1>
            <div className="language-switcher__languages">
                <div className="language-switcher__languages__language-button">
                    <CustomizedButton url={"en"} languageText={"ENGLISH"} lng={lng} />
                </div>
                <div className="language-switcher__languages__language-button">
                    <CustomizedButton url={"es"} languageText={"ESPAÑOL"} lng={lng} />
                </div>
            </div>
        </div>
    )
}

export default LanguageSwitcher