import React from "react";
import { Box, Button } from "@chakra-ui/core";
import {
    Link,
} from "react-router-dom";

const Home = props => {
    return (
        <Box  rounded="lg" overflow="hidden">
            <Button><Link to="/business/new">Add a business</Link></Button>
        </Box>
    )

}

export default Home;