import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  color,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";

function Booking() {

const {isLoading, response, submit} = useSubmit();

  const formik = useFormik({
    initialValues: {
        resDate: "",
        resTime: "",
        occasion: "",
        guests: 1,
    },
    onSubmit: (values) => {
      submit("", values);
      formik.resetForm();
    },
    validationSchema: Yup.object().shape({
        resDate: Yup.date()
          .required("Please choose a date for your reservation.")
          .min(new Date().toISOString().slice(0, 10), "Date cannot be in the past."),
        resTime: Yup.string().required("Please choose a time for your reservation."),
        guests: Yup.number()
          .required("Please enter the number of guests.")
          .min(1, "Minimum number of guests is 1.")
          .max(10, "Maximum number of guests is 10."),
        occasion: Yup.string().required("Please select an occasion."),
      })   
  });

    return(
    <Box p={4}>
        <FullScreenSection
        isDarkBackground
        backgroundColor="#495E57"
        spacing={8}
      >
        <VStack w="1024px" p={32} alignItems="flex-start">
          <Box p={6} rounded="md" w="100%">
            <form onSubmit={formik.onSubmit}>
              <VStack spacing={4}>
                <FormControl isInvalid={formik.touched.resDate && formik.errors.resDate}>
                  <FormLabel htmlFor="resDate">Choose Date</FormLabel>
                  <Input
                    type="date"
                    id="resDate"
                    name="resDate"
                    {...formik.getFieldProps("resDate")}
                  />
                  <FormErrorMessage>{formik.errors.resDate}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel htmlFor="resTime">Choose Time</FormLabel>
                  <Select id="resTime" name="resTime" {...formik.getFieldProps("resTime")}>
                    <option value='17'>17:00</option>
                    <option value='18'>18:00</option>
                    <option value='19'>19:00</option>
                    <option value='20'>20:00</option>
                    <option value='21'>21:00</option>
                    <option value='22'>22:00</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="ocassion">Ocassion</FormLabel>
                  <Select id="ocassion" name="ocassion" {...formik.getFieldProps("ocassion")}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">
                      Anniversary
                    </option>
                  </Select>
                </FormControl>
                <FormControl isInvalid={formik.touched.guest && formik.errors.guest}>
                  <FormLabel htmlFor="guest">Guest</FormLabel>
                  <Textarea
                    id="guest"
                    type="number"
                    placeholder="1"
                    name="guest"
                    {...formik.getFieldProps("guest")}
                  />
                  <FormErrorMessage>{formik.errors.guest}</FormErrorMessage>
                </FormControl>
                <Button type="submit" sx={{backgroundColor: '#F4CE14'}} width="full" isLoading={isLoading}value="Make Your reservation">
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </FullScreenSection>
    </Box>
    );
}

export default Booking;