import "./GeneralButton.scss"
import React from "react";
import Button from '@mui/material/Button';

const GeneralButton = ({ text }) => {
    return (
      <Button variant="contained">{text}</Button>
    )
}

export default GeneralButton;