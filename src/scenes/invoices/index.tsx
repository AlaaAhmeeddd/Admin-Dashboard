import Header from "../../components/Header";
import Container from "../../components/Container";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

function Invoices() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "cost",
          headerName: "Cost",
          flex: 1,
          renderCell: (params) => (
            <Typography color={colors.greenAccent[500]} variant="subtitle2" className="relative top-1/2 -translate-y-1/2">
              ${params.row.cost}
            </Typography>
          ),
        },
        {
          field: "date",
          headerName: "Date",
          flex: 1,
        },
    ];

    return (
        <Container>
            <Header title={"Invoices"} subTitle={"List of Invoice Balances"} />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    overflowX: "auto",
                    "& .MuiDataGrid-root": {
                      border: "none",
                      minWidth: "950px",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataInvoices}
                    columns={columns}
                    checkboxSelection
                />
            </Box>
        </Container>
    );
}

export default Invoices;
