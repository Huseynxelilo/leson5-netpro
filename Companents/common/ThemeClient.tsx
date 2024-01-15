"use client"
import React, { ReactNode } from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from './theme'

interface IProps {
 children:ReactNode
}

const ThemeClient = ({children}:IProps) => {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    {children}
    </ThemeProvider>
  )
}

export default ThemeClient