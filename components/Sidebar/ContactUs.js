// Chakra imports
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Assets
  import BgSignUp from "../../assets/img/doctor-banner.jpg";
  console.log(BgSignUp);
  import React, { useEffect, useState } from "react";
  
  import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
  import { NavLink } from "react-router-dom";
  import { useHistory } from "react-router-dom";
  
  function ContactUs() {
    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  
    const initialValues = {
      name: "",
      email: "",
      password: "",
    };
  
    const navigate = useHistory();
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [data, setData] = useState([]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmit(true);
      const errors = validate(formValues);
      setFormErrors(errors);
  
      if (Object.keys(errors).length === 0) {
        setData([...data, formValues]);
        navigate.push("/auth/signin");
      }
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues,"useeffect");
      }
    }, [formErrors]);
  
    const validate = (values) => {
      const errors = {};
      const regex = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
      if (!values.name) {
        errors.name = "Enter your Name";
      } else if (!values.email) {
        errors.email = "Enter your Email";
      } else if (!values.email.includes("@")) {
        errors.email = "Not a valid Email";
      } else if (!values.password) {
        errors.password = "Enter your Password";
      } else if (values.password.length < 4) {
        errors.password = "Your Password length must be greater than 4";
      } else {
        // console.log("data added successfully");
        localStorage.setItem("userdata", JSON.stringify([...data, formValues]));
      }
      return errors;
    };
  
    return (
      <Flex
        direction="column"
        alignSelf="center"
        justifySelf="center"
        overflow="hidden"
      >
        <Box
          position="absolute"
          minH={{ base: "70vh", md: "50vh" }}
          w={{ md: "calc(100vw - 50px)" }}
          borderRadius={{ md: "15px" }}
          left="0"
          right="0"
          bgRepeat="no-repeat"
          overflow="hidden"
          zIndex="-1"
          top="0"
          bgImage={BgSignUp}
          bgSize="cover"
          mx={{ md: "auto" }}
          mt={{ md: "14px" }}
        ></Box>
        <Flex
          direction="column"
          textAlign="center"
          justifyContent="center"
          align="center"
          mt="6.5rem"
          mb="30px"
        >
          <Text fontSize="4xl" color="white" fontWeight="bold">
            Welcome!
          </Text>
          <Text
            fontSize="md"
            color="white"
            fontWeight="normal"
            mt="10px"
            mb="26px"
            w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}
          >
            Use these awesome forms to login or create new account in your project
            for free.
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
          <Flex
            direction="column"
            w="445px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: "100px" }}
            bg={bgColor}
            boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
          >
            <Text
              fontSize="xl"
              color={textColor}
              fontWeight="bold"
              textAlign="center"
              mb="22px"
            >
              Register With
            </Text>
            <HStack spacing="15px" justify="center" mb="22px">
              <Flex
                justify="center"
                align="center"
                w="75px"
                h="75px"
                borderRadius="15px"
                border="1px solid lightgray"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ filter: "brightness(120%)", bg: bgIcons }}
              >
                <Link href="#">
                  <Icon
                    as={FaFacebook}
                    w="30px"
                    h="30px"
                    _hover={{ filter: "brightness(120%)" }}
                  />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                w="75px"
                h="75px"
                borderRadius="15px"
                border="1px solid lightgray"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ filter: "brightness(120%)", bg: bgIcons }}
              >
                <Link href="#">
                  <Icon
                    as={FaApple}
                    w="30px"
                    h="30px"
                    _hover={{ filter: "brightness(120%)" }}
                  />
                </Link>
              </Flex>
              <Flex
                justify="center"
                align="center"
                w="75px"
                h="75px"
                borderRadius="15px"
                border="1px solid lightgray"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ filter: "brightness(120%)", bg: bgIcons }}
              >
                <Link href="#">
                  <Icon
                    as={FaGoogle}
                    w="30px"
                    h="30px"
                    _hover={{ filter: "brightness(120%)" }}
                  />
                </Link>
              </Flex>
            </HStack>
            <Text
              fontSize="lg"
              color="gray.400"
              fontWeight="bold"
              textAlign="center"
              mb="22px"
            >
              or
            </Text>
            {/* <NavLink to="/auth/signin"> */}
            <FormControl onSubmit={handleSubmit}>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Name
              </FormLabel>
              <Input
                name="name"
                value={formValues.name}
                onChange={handleChange}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Your full name"
                mb="24px"
                size="lg"
              />
              <p style={{ color: "red" }}>{formErrors.name}</p>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                name="email"
                value={formValues.email}
                onChange={handleChange}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="email"
                placeholder="Your email address"
                mb="24px"
                size="lg"
              />
              <p style={{ color: "red" }}>{formErrors.email}</p>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                name="password"
                value={formValues.password}
                onChange={handleChange}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="password"
                placeholder="Your password"
                mb="24px"
                size="lg"
              />
              <p style={{ color: "red" }}>{formErrors.password}</p>
              <FormControl display="flex" alignItems="center" mb="24px">
                <Switch id="remember-login" colorScheme="teal" me="10px" />
                <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                type="submit"
                bg="teal.300"
                fontSize="10px"
                color="white"
                fontWeight="bold"
                onClick={handleSubmit}
                w="100%"
                h="45"
                mb="24px"
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
              >
                SIGN UP
              </Button>
            </FormControl>
            {/* </NavLink> */}
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Already have an account?
                <NavLink
                  to="/auth/signin"
                  color={titleColor}
                  as="span"
                  ms="5px"
                  fontWeight="bold"
                >
                  Sign In
                </NavLink>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }
  
  export default ContactUs;
  