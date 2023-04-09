import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export default function SelectBox({ label, menu, value , setValue }) {
  return (
    <TextField
      select
      label={label}
      value={value}
      sx={{ width: "20%" }}
      onChange={(e) => setValue(e.target.value)}
    >
      {menu.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
