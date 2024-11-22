import { Typography, useTheme } from "@mui/material";
import Container from "./Container";
import { tokens } from "../theme"


interface headerProps {
    title: string,
    subTitle: string,
}

export default function Header({title, subTitle}: headerProps) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Container>
            <Typography variant="h4" className="uppercase" sx={{fontWeight: "bold"}}>
                {title}
            </Typography>
            <Typography variant="subtitle1" color={colors.greenAccent[500]}>
                {subTitle}
            </Typography>
        </Container>
    )
}
