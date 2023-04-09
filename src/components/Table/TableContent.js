import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function TableContent({ Data, titles }) {

  // console.log(Data , "Data in table content");
  return (
    <>
      {Data && (
        <TableBody>
          {Data.map((row, index) => (
            <TableRow key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {titles.map((title) => (
                  <TableCell key={title.id} align="left">
                    {row[title.field]}
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      )}
    </>
  );
}