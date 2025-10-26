import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Stack } from "@mui/material";
import {FavoriteBorder, Favorite} from "@mui/icons-material";

export default function Checkboxes () {
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
                            <TableCell>
                                Country
                            </TableCell>
                            <TableCell>
                                Capital
                            </TableCell>
                            <TableCell>
                                Currency
                            </TableCell>
                            <TableCell>
                                Continent
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                            <TableRow>
                                <TableCell>
                                    {row.country}
                                </TableCell>
                                <TableCell>
                                    {row.capital}
                                </TableCell>
                                <TableCell>
                                    {row.currency}
                                </TableCell>
                                <TableCell>
                                    {row.continent}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
}