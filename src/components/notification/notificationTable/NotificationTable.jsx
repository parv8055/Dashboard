import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./notificationTable.css";

function createData(title, des, date) {
    return { title, des, date };
}

const rows = [
    createData("Reasoning Test", "Shailendra Sikarwar", "2 october  2022"),
    createData("Reasoning Test", "Shailendra Sikarwar", "2 october  2022"),
    createData("Reasoning Test", "Shailendra Sikarwar", "2 october  2022"),
    createData("Reasoning Test", "Shailendra Sikarwar", "2 october  2022"),
    createData("Reasoning Test", "Shailendra Sikarwar", "2 october  2022"),
    createData("Reasoning Test", "Shailendra Sikarwar", "2 october  2022"),
    createData("Reasoning Test", "Shailendra Sikarwar", "2 october  2022"),
    createData("Reasoning Test", "Shailendra Sikarwar", "2 october  2022"),

];


const makeStyle = (status) => {
    if (status === 'Approved') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }
}

export default function BasicTable() {
    return (
        <div className="Table">
            <TableContainer
                component={Paper}
                style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {rows.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="left">{row.des}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left" className="Details">Delete</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
