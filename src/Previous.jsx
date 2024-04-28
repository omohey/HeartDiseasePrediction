import { Box, Chip, Typography } from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "id", label: "ID" },
  {
    id: "height",
    label: "Height (cm)",
    format: (value) => value.toFixed(2),
  },
  {
    id: "weight",
    label: "Weight (kg)",
    format: (value) => value.toFixed(2),
  },
  {
    id: "BMI",
    label: "BMI",
    format: (value) => value.toFixed(2),
  },
  { id: "alcohol_Consumption", label: "Alcohol Consumption" },
  { id: "fruit_Consumption", label: "Fruit Consumption" },
  {
    id: "green_Vegtable_Consumption",
    label: "Green Vegetable Consumption",
  },
  {
    id: "fried_Potato_Consumption",
    label: "Fried Potato Consumption",
  },
  {
    id: "age",
    label: "Age",
    format: (value) => {
      if (value === 1) return "18-24";
      if (value === 2) return "25-29";
      if (value === 3) return "30-34";
      if (value === 4) return "35-39";
      if (value === 5) return "40-44";
      if (value === 6) return "45-49";
      if (value === 7) return "50-54";
      if (value === 8) return "55-59";
      if (value === 9) return "60-64";
      if (value === 10) return "65-69";
      if (value === 11) return "70-74";
      if (value === 12) return "75-79";
      if (value === 13) return "80+";
    },
  },
  {
    id: "checkup",
    label: "Last Checkup",
    format: (value) => {
      if (value === 1) return "Past Year";
      if (value === 2) return "Past 2 Years";
      if (value === 3) return "Past 5 Years";
      if (value === 4) return "More than 5 years ago";
      if (value === 5) return "Never";
    },
  },
  {
    id: "isExercise",
    label: "Exercises",
    format: (value) => (value ? "Yes" : "No"),
  },
  {
    id: "isFemale",
    label: "Gender",
    format: (value) => (value ? "Female" : "Male"),
  },
  {
    id: "isSmoker",
    label: "Smoker",
    format: (value) => (value ? "Yes" : "No"),
  },
  {
    id: "truth",
    label: "Has Heart Disease?",
    format: (value) =>
      value ? (
        <Chip
          label="Yes"
          color="success"
        />
      ) : (
        <Chip
          label="No"
          color="error"
        />
      ),
  },
];

function Previous() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    fetch("http://159.89.97.175:5000/get_data")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "background.default",
        flexDirection: "column",
        paddingX: 1,
        paddingY: 5,
      }}
    >
      <Box
        //padding={5}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          //   backgroundColor: "background.paper",
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Previous Submissions
        </Typography>
        {/* Table for all previous submissions */}
        <Paper sx={{ overflow: "hidden", width: "90vw" }}>
          <TableContainer sx={{}}>
            <Table
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Box>
  );
}
export default Previous;
