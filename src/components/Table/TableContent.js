import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function TableContent({ Data, titles }) {
  return (
    <>
      {Data && (
        <TableBody>
          {Data.map((obj, index) => (
            <TableRow key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {titles.map((item, index) => {
                return (
                      <TableCell key={index}>{String(obj[val])}</TableCell>
                    )}
                )
              }
            </TableRow>
          ))}
        </TableBody>
      )}
    </>
  );
}