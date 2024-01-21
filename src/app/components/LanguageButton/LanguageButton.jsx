import "./LanguageButton.scss"
import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button';

const LanguageButton = ({ lng, text }) => {
  const router = useRouter()

  const handleChangeLanguage = () => {
    router.push(`/${lng}`)
  }

  return (
    <Button className="language-button" variant="outlined" onClick={handleChangeLanguage}>
      {text}
    </Button>
  )
}

export default LanguageButton;