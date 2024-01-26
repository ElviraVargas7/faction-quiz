"use client"
import "./CustomizedButton.scss"
import React from "react";
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button'
import { useTranslation } from '../../i18n/client'

const CustomizedButton = ({ url, languageText, lng }) => {
  const { t } = useTranslation(lng, 'home')
  const router = useRouter()
  const buttonType = languageText ? "language" : "start"

  const handleChangeLanguage = () => {
    const link = languageText ? url : "quiz"
    router.push(`/${link}`)
  }

  return (
    <Button 
      className={buttonType}
      data-testid={languageText ? `${buttonType}-${url}` : buttonType}
      variant="outlined" 
      onClick={handleChangeLanguage}>
      {languageText || t("start")}
    </Button>
  )
}

export default CustomizedButton;