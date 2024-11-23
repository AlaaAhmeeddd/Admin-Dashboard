import { Stack } from "@mui/material";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Container from "../../components/Container";
import Header from "../../components/Header";

export default function Dashboard() {
    return (
        <Container>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ flexWrap: 'wrap' }}
            >
                <Header title="Dashboard" subTitle="Welcome to your dashboard" />
                <Button variant="outlined" startIcon={<DownloadIcon />}>
                    Download your dashboard
                </Button>
            </Stack>
        </Container>
    )
}
