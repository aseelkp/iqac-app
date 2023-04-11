import React from 'react'
import { TextField, MenuItem } from '@mui/material'

const departments = [
    { value: "baWas", label: "BA West asian Studies" },
    { value: "baEng", label: "BA English" },
    { value: "baEco", label: "BA Economics" },
    { value: "bscCS", label: "BSc Computer Science" },
    { value: "bscMicro", label: "BSc Microbiology" },
    { value: "bscBioChem", label: "BSc Biochemistry" },
    { value: "bscBioTech", label: "BSc Biotechnology" },
    { value: "bscMathPhy", label: "BSc Mathematics and Physics" },
    { value: "bcomCoop", label: "Bcom cooperation" },
    { value: "bcomCA", label: "Bcom Computer Application" },
    { value: "bba", label: "BBA" },
    { value: "bvocAccTax", label: "BVoc Accounting and taxation" },
    { value: "bvocLog", label: "BVoc Logistics" },
    { value: "bvocIslFin", label: "BVoc Islamic Finance" },
]

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