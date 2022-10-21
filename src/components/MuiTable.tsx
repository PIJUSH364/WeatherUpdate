import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
} from "@mui/material";
const tableData = [
  {
    id: 1,
    first_name: "Abrahan",
    last_name: "Balchen",
    email: "abalchen0@vkontakte.ru",
    gender: "Male",
    ip_address: "13.168.199.89",
  },
  {
    id: 2,
    first_name: "Janie",
    last_name: "Clifton",
    email: "jclifton1@behance.net",
    gender: "Female",
    ip_address: "61.27.95.203",
  },
  {
    id: 3,
    first_name: "Marice",
    last_name: "Alwood",
    email: "malwood2@youku.com",
    gender: "Female",
    ip_address: "15.145.251.108",
  },
  {
    id: 4,
    first_name: "Derward",
    last_name: "Pidduck",
    email: "dpidduck3@symantec.com",
    gender: "Male",
    ip_address: "184.173.46.158",
  },
  {
    id: 5,
    first_name: "Giles",
    last_name: "Slesser",
    email: "gslesser4@ovh.net",
    gender: "Male",
    ip_address: "6.29.249.251",
  },
  {
    id: 6,
    first_name: "Miguel",
    last_name: "Schutter",
    email: "mschutter5@ocn.ne.jp",
    gender: "Male",
    ip_address: "238.108.60.59",
  },
  {
    id: 7,
    first_name: "Hewet",
    last_name: "Fearnyhough",
    email: "hfearnyhough6@apple.com",
    gender: "Male",
    ip_address: "117.44.221.30",
  },
  {
    id: 8,
    first_name: "Audry",
    last_name: "Luetkemeyer",
    email: "aluetkemeyer7@geocities.jp",
    gender: "Female",
    ip_address: "221.88.98.204",
  },
  {
    id: 9,
    first_name: "Frayda",
    last_name: "Beddie",
    email: "fbeddie8@spotify.com",
    gender: "Female",
    ip_address: "89.6.253.135",
  },
  {
    id: 10,
    first_name: "Reinwald",
    last_name: "Bearman",
    email: "rbearman9@patch.com",
    gender: "Male",
    ip_address: "250.160.248.65",
  },
];
function MuiTable() {
  return (
    <Box m={4}>
      <TableContainer component={Paper} sx={{ maxHeight: "320px" }}>
        <Table stickyHeader>
          <TableHead aria-label="simple table">
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                // last chils of table row border is zero
                sx={{ "&:last-child td ,&:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MuiTable;
