import "./SettingsButton.scss"
import React from "react";
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button';

const SettingsButton = ({ url, text }) => {
  const router = useRouter()

  const handleChangeLanguage = () => {
    router.push(`/${url}`)
  }

  return (
    <Button className="settings-button" variant="outlined" onClick={handleChangeLanguage}>
      {text}
    </Button>
  )
}

export default SettingsButton;