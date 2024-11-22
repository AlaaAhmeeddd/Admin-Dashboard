import { Box } from "@mui/material";

export default function Container({children}: {children: React.ReactNode}) {
    return (
        <Box className="px-5 py-6">
            {children}
        </Box>
    )
}
