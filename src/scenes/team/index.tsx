import Header from "../../components/Header";
import Container from "../../components/Container";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam, TeamMember } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

function Team() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", flex: 1 },
        {
            field: "name",
            headerName: "Name",
            flex: 2,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
            flex: 1,
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 2,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 2,
        },
        {
            field: "accessLevel",
            headerName: "Access Level",
            flex: 2,
            renderCell: ({ row }: { row: TeamMember }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        sx={{
                            backgroundColor:
                                row.access === "admin"
                                    ? colors.greenAccent[600]
                                    : row.access === "manager"
                                    ? colors.greenAccent[700]
                                    : colors.greenAccent[700],
                            marginY: 1,
                        }}
                        borderRadius="4px"
                    >
                        {row.access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {row.access === "manager" && <SecurityOutlinedIcon />}
                        {row.access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {row.access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Container>
            <Header title={"Team"} subTitle={"Managing the team members"} />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    overflowX: "auto",
                    "& .MuiDataGrid-root": {
                        border: "none",
                        minWidth: "1000px",
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
                    "& .MuiDataGrid-toolbarContainer button":{
                        color: colors.grey[100],
                    }
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    checkboxSelection
                    slots={{ toolbar : GridToolbar}}
                />
            </Box>
        </Container>
    );
}

export default Team;
