"use client"
import "./StartButton.scss"
import React from "react";
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button';
import { useTranslation } from '@/app/i18n/client'

const StartButton = ({ lng }) => {
  const { t } = useTranslation(lng, 'home')
  const router = useRouter()

  const handleChangeLanguage = () => {
    router.push(`/quiz`)
  }

  return (
    <Button className="start-button" variant="outlined" onClick={handleChangeLanguage}>
      {t("start")}
    </Button>
  )
}

export default StartButton;