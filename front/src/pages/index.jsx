import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import ParameterBox from '../components/ParameterBox';
import { getProducts } from "../api/indexAPI";
import { useEffect, useState } from "react";


const Index = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const products = await getProducts();
        setAllProducts(products);
    };

    // if (allProducts.length === 0) {
    //     return <div>Loading...</div>;
    // }

    return (
        <Box
            sx={{
                display: "flex",
                minWidth: "80vw",
                minHeight: "80vh",
                margin: "10%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    backgroundColor: "white",
                    opacity: 0.6,
                    minWidth: "100%",
                    minHeight: "100%",
                }}
            >
                <Stack direction={"column"} sx={{ flexGrow: 1 }}>
                    <Stack direction={"row"} display={"flex"} sx={{ flexGrow: 1 }}>
                        {/* <ParameterBox title={"temperatura"} value={allProducts[allProducts.length - 1].temperature} /> */}
                        <ParameterBox title={"temperatura"} value={17} />
                        <ParameterBox title={"temperatura"} value={17} />
                    </Stack>
                    <Stack direction={"row"} display={"flex"} sx={{ flexGrow: 1 }}>
                        <ParameterBox title={"temperatura"} value={17} />
                        <ParameterBox title={"temperatura"} value={17} />
                        <ParameterBox title={"temperatura"} value={17} />
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default Index;