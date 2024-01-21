"use client"

import "./LanguageSwitcher.scss"
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link'
import { languages } from '@/app/i18n/settings'
import { changeLanguage, useTranslation } from '@/app/i18n/client'
import LanguageButton from "../LanguageButton/LanguageButton";
import Typography from '@mui/material/Typography';

const LanguageSwitcher = ({ lng }) => {
    const { t } = useTranslation(lng, 'language')

    return (
        <div className='language-switcher'>
            <h1>{t("title")}</h1>
            {languages.map((item) => {
                return (
                    <LanguageButton lng={item} />
                )
            })}
        </div>
    )
}

export default LanguageSwitcher