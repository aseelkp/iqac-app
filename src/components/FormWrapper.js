import React from 'react'
import { Paper } from '@mui/material'

function FormWrapper({children}) {
  return (
    <Paper elevation={15} className="p-4 mt-5">
        {children}
    </Paper>
  )
}

export default FormWrapper