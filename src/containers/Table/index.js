import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Stack } from "@mui/material";

export default function TableComponent () {
    const columns = [
        'Country',
        'Capital',
        'Currency',
        'Continent'
    ];

    const data = [
        {
            country: 'India',
            capital: 'New Delhi',
            currency: 'Rupee',
            continent: 'Asia'
        },
        {
            country: 'United Kingdom',
            capital: 'London',
            currency: 'Pound',
            continent: 'Europe'
        }
    ];

    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
            <TableContainer>
                <Table>
                    <TableHead sx={{
                        "& .MuiTableCell-head": {
                            fontWeight: 600
                        },
                    }}>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell>
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                            <TableRow>
                                {columns.map(column => (
                                    <TableCell>
                                        {row[column.toLowerCase()]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
}