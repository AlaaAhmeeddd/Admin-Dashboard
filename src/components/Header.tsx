import { Typography, useTheme, Box } from "@mui/material";
import { tokens } from "../theme"


interface headerProps {
    title: string,
    subTitle: string,
}

export default function Header({title, subTitle}: headerProps) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box sx={{mb: 1}}>
            <Typography variant="h4" className="uppercase mb-2" color={colors.grey[100]} sx={{fontWeight: "bold"}}>
                {title}
            </Typography>
            <Typography variant="subtitle1" color={colors.greenAccent[500]}>
                {subTitle}
            </Typography>
        </Box>
    )
}
