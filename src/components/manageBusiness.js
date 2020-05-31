import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/core";
import BusinessService from "../services/business";
import Locations from "./locations";


const ManageBusiness = props => {
  const initialBusinessState = {
    id: null,
    name: "",
  };
  const { handleSubmit, errors, register, formState } = useForm();
  const [business, setBusiness] = useState(initialBusinessState);

  useEffect(() => {
    if (props.match.params.id) {
      retrieveBusiness(props.match.params.id);
    }
  }, [props.match.params.id]);

  const retrieveBusiness = id => {
    BusinessService.get(id)
      .then(response => {
        setBusiness(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setBusiness({ ...business, [name]: value });
  };


  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error || true;
  }

  function createBusiness(data) {
    BusinessService.create(data)
      .then(response => {
        setBusiness({
          id: response.data.id,
          name: response.data.name,
        });
      })
      .catch(e => {
        console.log(e);
      });
  } 
  
  function updateBusiness(data) {
    BusinessService.update(data, props.match.params.id)
      .then(response => {
        setBusiness({
          id: response.data.id,
          name: response.data.name,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }


  function onSubmit(values) {
    var data = {
      name: business.name
    };

    if (!props.match.params.id) {
      createBusiness(data);
    } else {
      updateBusiness(data);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Business name</FormLabel>
        <Input
          name="name"
          placeholder="name"
          value={business.name}
          onChange={handleInputChange}
          ref={register({ validate: validateName })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        variant="solid"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
        <Locations id={props.match.params.id}/>
    </form>
  );
}

export default ManageBusiness;
