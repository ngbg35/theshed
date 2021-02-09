import React from "react"
import containerStyles from "./overwrite.css"

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}