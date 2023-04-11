import React from 'react'
import { TextField, MenuItem } from '@mui/material'
import { departments } from '@/constants/departments'

function DepartmentSelect({props, department, setDepartment}) {

  return (
    <TextField
        {...props}
        id="department"
        required
        fullWidth
        select
        label="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        >
        {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
            {option.label}
            </MenuItem>
        ))}
    </TextField>
    
  )
}

export default DepartmentSelect