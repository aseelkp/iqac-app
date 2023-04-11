import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export default function SelectBox({ label, menu, value , setValue }) {

    console.log(menu , "menu")

  return (
    <TextField
      select
      label={label}
      value={value}
      sx={{ width: "20%" }}
      onChange={(e) => setValue(e.target.value)}
    >
      {menu.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
    </TextField>
  );
}
