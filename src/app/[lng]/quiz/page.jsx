"use client"
import Question from "@/app/components/Question/Question";
import React, { useState } from "react";

export default function Quiz({ params: { lng } }) {
    const [answers, setAnswers] = useState([])

    return (
      <dev>
        <Question lng={lng} />
      </dev>
    );
  }