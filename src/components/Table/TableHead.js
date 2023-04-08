import { TableCell, TableHead, TableRow } from "@mui/material";



const TableHeader = ({titles}) => {
    return (
        <TableHead>
            <TableRow>
                {titles.map((title) => (
                    <TableCell key={title.id} colSpan={title.colSpan ? "" : title.colSpan }>{title.name}</TableCell>
                ))}
            </TableRow>
        </TableHead>
        )
}

export default TableHeader