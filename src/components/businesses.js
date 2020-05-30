import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import {
    Box,
    Text, List,
    ListItem,
    Icon,
    Grid,
    PseudoBox
} from "@chakra-ui/core";
import BusinessService from "../services/business";
import {
    Link
} from "react-router-dom";

export default function Businesses() {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        retrieveBusinesses();
    }, []);

    const retrieveBusinesses = () => {
        BusinessService.getAll()
            .then(response => {
                setBusinesses(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <Box w="100%">
            <Box p="6" w="100%">
                <Text fontSize="4xl">Your Businesses</Text>
                </Box>
                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                    {businesses &&
                        businesses.map((business, index) => (
                            <div>
                                <Box p="6" w="100%">
                                <Link to={"/business/" + business.id}>
                                    <PseudoBox
                                        role="group"
                                        maxW="sm"
                                        overflow="hidden"
                                        rounded="md"
                                        p={5}
                                        mb="5"
                                        cursor="pointer"
                                        bg="white"
                                        boxShadow="md"
                                        _hover={{ bg: "blue.500" }}
                                    >
                                        <PseudoBox
                                            fontWeight="semibold"
                                            fontSize="lg"
                                            mb={1}
                                            color="gray.900"
                                            _groupHover={{ color: "white" }}
                                        >
                                            {business.name}
                                        </PseudoBox>
                                        <PseudoBox color="gray.700" mb={2} _groupHover={{ color: "white" }}>
                                            Create a new project from a variety of starting templates.
                                            </PseudoBox>
                                    </PseudoBox>
                                    </Link>
                                </Box>
                            </div>
                        ))}
                </Grid>
            </Box>
        </div>
    )
}


