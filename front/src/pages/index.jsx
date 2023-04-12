import { Stack } from '@mui/material';
import Box from '@mui/material/Box'
import ParameterBox from '../components/ParameterBox';

const index = () => {
    return (
        <Box
            sx={{
                display: "flex",
                minWidth: "80vw",
                minHeight: "80vh",
                margin: "10%"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    backgroundColor: "white",
                    opacity: 0.6,
                    minWidth: "100%",
                    minHeight: "100%",
                }}>
                <Stack direction={"column"} sx={{ flexGrow: 1 }}>
                    <Stack direction={"row"} display={"flex"} sx={{ flexGrow: 1 }}>
                        <ParameterBox title={"temperatura"} value={17} sx={{ display: "flex", flexGrow: 1 }} />
                        <ParameterBox title={"temperatura"} value={17} sx={{ flexGrow: 1 }} />
                        <ParameterBox title={"temperatura"} value={17} sx={{ flexGrow: 1 }} />
                    </Stack>
                    <Stack direction={"row"} display={"flex"} sx={{ flexGrow: 1 }}>
                        <ParameterBox title={"temperatura"} value={17} display={"flex"} sx={{ flexGrow: 1 }} />
                        <ParameterBox title={"temperatura"} value={17} display={"flex"} sx={{ flexGrow: 1 }} />
                        <ParameterBox title={"temperatura"} value={17} display={"flex"} sx={{ flexGrow: 1 }} />
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default index;