"use client"

import React from "react"
import log from "@/utils/log"

const Button = () => {
  const handleClick = () => {
    console.log("di click en el frontend edge")
    log.info("uso la librería de logs edge")
  }
  return (
    <button
      onClick={handleClick}
      role="button"
      style={{
        height: "35px",
        width: "100px",
        backgroundColor: "crimson",
        color: "white",
        border: "1px solid white",
        borderRadius: "8px",
        textAlign: "center",
        padding: "5px 10px",
        cursor: "pointer",
      }}
    >
      Enviar ahora
    </button>
  )
}

export default Button
