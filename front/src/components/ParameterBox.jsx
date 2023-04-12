import { Box, Stack, Typography } from "@mui/material";

const ParameterBox = ({ title, value }) => {
    return (
        <Box>
            <Stack direction={"column"}>
                <Typography>{title}</Typography>
                <Typography>{value}</Typography>
            </Stack>
        </Box>
    );
}

export default ParameterBox;