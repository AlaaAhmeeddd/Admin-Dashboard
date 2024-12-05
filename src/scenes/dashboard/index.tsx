import { Box, Button, IconButton, Typography, useTheme, Stack } from "@mui/material";
import { tokens } from "../../theme";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

export default function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Container>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ flexWrap: 'wrap' }}
            >
                <Header title="Dashboard" subTitle="Welcome to your dashboard" />
                <Box>
                    <Button
                        sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "10px 15px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Stack> 
            {/* First Row */}
            <Box display="grid"
                gridAutoRows="140px"
                gap="20px"
                className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-6"
            >
                <Box
                    sx={{
                        backgroundColor: colors.primary[400],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <StatBox
                        title="12,361"
                        subtitle="Emails Sent"
                        progress={0.75}
                        increase="+14%"
                        icon={
                            <EmailIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "20px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    sx={{
                        backgroundColor: colors.primary[400],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <StatBox
                        title="431,225"
                        subtitle="Sales Obtained"
                        progress={0.50}
                        increase="+21%"
                        icon={
                            <PointOfSaleIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "20px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    sx={{
                        backgroundColor: colors.primary[400],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <StatBox
                        title="32,441"
                        subtitle="New Clients"
                        progress={0.30}
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "20px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    sx={{
                        backgroundColor: colors.primary[400],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <StatBox
                        title="1,325,134"
                        subtitle="Traffic Received"
                        progress={0.80}
                        increase="+43%"
                        icon={
                            <TrafficIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "20px" }}
                            />
                        }
                    />
                </Box>
            </Box>
            {/* Second Row */}
            <Box className="lg:grid grid-cols-6 gap-[20px] mt-6 lg:h-[350px]">
                <Box sx={{backgroundColor: colors.primary[400]}} className="col-span-4" >
                    <Box
                        mt="20px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box sx={{pt: 3}}>
                            <Typography
                                variant="h6"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    sx={{ backgroundColor: colors.primary[400]}}
                    overflow="auto"
                    className="col-span-2"
                >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    p="15px"
                    sx={{ colors: colors.grey[100]}}
                >
                    <Typography color={colors.grey[100]} variant="h6" fontWeight="600">
                        Recent Transactions
                    </Typography>
                </Box>
                {mockTransactions.map((transaction, i) => (
                    <Box
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="15px"
                    >
                        <Box>
                            <Typography
                                color={colors.greenAccent[500]}
                                variant="h6"
                                fontWeight="600"
                            >
                                {transaction.txId}
                            </Typography>
                            <Typography color={colors.grey[100]}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>{transaction.date}</Box>
                        <Box
                            sx={{backgroundColor: colors.greenAccent[500]}}
                            p="5px 10px"
                            borderRadius="4px"
                        >
                            ${transaction.cost}
                        </Box>
                    </Box>
                ))}
                </Box>
            </Box>
            {/* Third Row */}
            <Box className="grid lg:grid-cols-3 grid-cols-1 gap-[20px] mt-6">
                <Box
                    sx={{backgroundColor: colors.primary[400]}}
                    p="30px"
                >
                    <Typography variant="h6" fontWeight="600">
                        Campaign
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size={125} />
                        <Typography
                            variant="h6"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px" }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography>Includes extra misc expenditures and costs</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{backgroundColor: colors.primary[400]}}
                >
                    <Typography
                        variant="h6"
                        fontWeight="600"
                        sx={{ padding: "30px 30px 0 30px" }}
                    >
                        Sales Quantity
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    sx={{backgroundColor: colors.primary[400]}}
                    padding="30px"
                >
                    <Typography
                        variant="h6"
                        fontWeight="600"
                        sx={{ marginBottom: "15px" }}
                    >
                        Geography Based Traffic
                    </Typography>
                    <Box height="200px">
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
