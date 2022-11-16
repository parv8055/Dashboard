import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./orderTable.css";

function createData(product, user, mobileNo, trackingId, date, status) {
    return { product, user, mobileNo, trackingId, date, status };
}

const rows = [
    createData("Reasoning Test", "Shailendra Sikarwar", 1234567890, 18908424, "2 october  2022", "Approved"),
    createData("REET Level 2 General Knowledge ", "Prati", 1234567890, 18908424, "7 october  2022", "Pending"),
    createData("Reasoning Test 22", "Pinky", 1234567890, 18908424, "12 october  2022", "Approved"),
    createData("Reasoning Test 19", "Pinky", 1234567890, 18908421, "19 october  2022", "Approved"),
    createData("Reasoning Test", "Shailendra Sikarwar", 1234567890, 18908424, "2 october  2022", "Approved"),
    createData("REET Level 2 General Knowledge ", "Prati", 1234567890, 18908424, "7 october  2022", "Pending"),
    createData("Reasoning Test 22", "Pinky", 1234567890, 18908424, "12 october  2022", "Approved"),
    createData("Reasoning Test 19", "Pinky", 1234567890, 18908421, "19 october  2022", "Approved"),
    createData("Reasoning Test", "Shailendra Sikarwar", 1234567890, 18908424, "2 october  2022", "Approved"),
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
            <h3>Recent Orders</h3>
            <TableContainer
                component={Paper}
                style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="left">User</TableCell>
                            <TableCell align="left">Mobile</TableCell>
                            <TableCell align="left">Tracking ID</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {rows.map((row) => (
                            <TableRow
                                key={row.product}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.product}
                                </TableCell>
                                <TableCell align="left">{row.user}</TableCell>
                                <TableCell align="left">{row.mobileNo}</TableCell>
                                <TableCell align="left">{row.trackingId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                                </TableCell>
                                <TableCell align="left" className="Details">Details</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
