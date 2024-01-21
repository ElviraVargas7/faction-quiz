import "./LanguageButton.scss"
import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button';

const LanguageButton = ({ lng }) => {
  const router = useRouter()

  const handleChangeLanguage = () => {
    router.push(`/${lng}`)
  }

  return (
    <Button variant="contained" onClick={handleChangeLanguage}>
      {lng}
    </Button>
  )
}

export default LanguageButton;