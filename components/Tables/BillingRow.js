import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPencilAlt, FaTrashAlt, FaTv } from "react-icons/fa";

function BillingRow(props) {
  // console.log(props, "11111111111111111111");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const {
    name: initialName,
    company: initialCompany,
    email: initialEmail,
    number: initialNumber,
  } = props;

  const handleDelete = () => {
    props.onDelete({ name, company, email, number });
  };

  const [name, setName] = useState(initialName);
  const [company, setCompany] = useState(initialCompany);
  const [email, setEmail] = useState(initialEmail);
  const [number, setNumber] = useState(initialNumber);
  const [isEditing, setIsEditing] = useState(false);
  const [save, setSave] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setSave(true);
  };

  const handleSave = () => {
    console.log("Saving billing information...");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(initialName);
    setCompany(initialCompany);
    setEmail(initialEmail);
    setNumber(initialNumber);
    setIsEditing(false);
  };

  return (
    <Box p="24px" bg={bgColor} my="22px" borderRadius="12px">
      <Flex justify="space-between" w="100%">
        <Flex direction="column" maxWidth="70%">
          <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
            {isEditing ? (
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            ) : (
              name
            )}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Company Name:{" "}
            <Text as="span" color="gray.500">
              {isEditing ? (
                <Input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              ) : (
                company
              )}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Email Address:{" "}
            <Text as="span" color="gray.500">
              {isEditing ? (
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                email
              )}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            VAT Number:{" "}
            <Text as="span" color="gray.500">
              {isEditing ? (
                <Input
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              ) : (
                number
              )}
            </Text>
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          {isEditing ? (
            <>
              <Button p="0px" bg="transparent">
                <Flex
                  color={textColor}
                  cursor="pointer"
                  align="center"
                  p="12px"
                >
                  <Icon as={FaTv} me="4px" />
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    onClick={handleSave}
                  >
                    Save
                  </Text>
                </Flex>
              </Button>
              <Button p="0px" bg="transparent">
                <Flex
                  color={textColor}
                  cursor="pointer"
                  align="center"
                  p="12px"
                >
                  <Icon as={FaTrashAlt} me="4px" />
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Text>
                </Flex>
              </Button>
            </>
          ) : (
            <>
              <Button
                p="0px"
                bg="transparent"
                mb={{ sm: "10px", md: "0px" }}
                me={{ md: "12px" }}
              >
                <Flex color="red.500" cursor="pointer" align="center" p="12px">
                  <Icon as={FaTrashAlt} me="4px" />
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    onClick={handleDelete}
                  >
                    DELETE
                  </Text>
                </Flex>
              </Button>
              <Button p="0px" bg="transparent">
                <Flex
                  color={textColor}
                  cursor="pointer"
                  align="center"
                  p="12px"
                >
                  <Icon as={FaPencilAlt} me="4px" />
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    onClick={handleEdit}
                  >
                    EDIT
                  </Text>
                </Flex>
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default BillingRow;
