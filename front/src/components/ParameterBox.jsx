import { Box, Stack, Typography } from "@mui/material";

const ParameterBox = ({ title, value }) => {
    return (
        <Box sx={{
            display: "flex",
            flexGrow: 1,
        }}>
            <Stack direction={"column"} width={"100%"}>
                <Typography>{title}</Typography>
                <Typography>{value}</Typography>
            </Stack>
        </Box>
    );
}

export default ParameterBox;