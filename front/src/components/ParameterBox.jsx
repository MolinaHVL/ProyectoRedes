import { Box, Stack, Typography } from "@mui/material";

const ParameterBox = ({ title, value }) => {
    return (
        <Box sx={{
            display: "flex",
            flexGrow: 1,
            border: "outset",
            borderRadius: "1px",

        }}>
            <Stack
                direction={"column"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}>

                <Typography fontSize={"24px"} flexGrow={1} paddingTop={"13%"}>{title}</Typography>
                <Typography fontSize={"24px"} flexGrow={1} paddingTop={"13%"}>{value}</Typography>
            </Stack>
        </Box>
    );
}

export default ParameterBox;