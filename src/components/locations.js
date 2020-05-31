import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import {
    Box,
    Text, List,
    ListItem,
    Icon,
    Grid,
    PseudoBox,
    useColorMode
} from "@chakra-ui/core";
import BusinessService from "../services/business";
import {
    Link
} from "react-router-dom";

const Locations = props => {
    const [locations, setLocations] = useState([]);
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = { light: "white", dark: "blue.500" };

    useEffect(() => {
        if (props.id) {
          retrieveLocations(props.id);
        }
      }, [props.id]);

    const retrieveLocations = (id) => {
        BusinessService.getAllLocations(id)
            .then(response => {
                setLocations(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <Box w="100%">
            <Box p="6" w="100%">
                <Text fontSize="4xl">Your Locations</Text>
                </Box>
                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                    {locations &&
                        locations.map((location, index) => (
                            <div>
                                <Box p="6" w="100%">
                                <Link to={"/location/" + location.id}>
                                    <PseudoBox
                                        role="group"
                                        maxW="sm"
                                        overflow="hidden"
                                        rounded="md"
                                        p={5}
                                        mb="5"
                                        cursor="pointer"
                                        bg={bgColor[colorMode]}
                                        boxShadow="md"
                                        _hover={{ bg: "blue.500" }}
                                    >
                                        <PseudoBox
                                            fontWeight="semibold"
                                            fontSize="lg"
                                            mb={1}
                                            _groupHover={{ color: "white" }}
                                        >
                                            {location.location_name}
                                        </PseudoBox>
                                        <PseudoBox mb={2} _groupHover={{ color: "white" }}>
                                        {location.primary_phone}
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

export default Locations;

