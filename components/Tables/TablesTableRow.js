import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function TablesTableRow(props) {
  // console.log(props,"hhhhhh")
  const { logo,id, name, email, subdomain, domain, status, date } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  const navigate = useHistory();

  const {
    name: initailName,
    email: initailEmail
  }=props;

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(initailName);
  const [editedEmail, setEditedEmail] = useState(initailEmail);
  
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
  
    setIsEditing(false);
    setEditedName(editedName);
  setEditedEmail(editedEmail);
  };
  const handleCancel = () => {
    setIsEditing(false);
    // Reset the edited values to the original props
    setEditedName(initailName);
    setEditedEmail(initailEmail);
  };

  const handleNavigate=(id)=> {
    navigate.push({
      pathname:"/admin/doctor-profile",
      state: {
        name: name,
        logo: logo,
        email: email
      }
    });
  }

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap" onClick={() => handleNavigate(id, name, logo, email)}>
        {/* <Link to="/" element={} */}
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px"  />
          <Flex direction="column">
            {isEditing ? (
              <>
                <Input
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                />
                <Input
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="normal"
                />
              </>
            ) : (
              <>
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >
                  {name}
                </Text>
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  {email}
                </Text>
              </>
            )}
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {domain}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {subdomain}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg={status === "Online" ? "green.400" : bgStatus}
          color={status === "Online" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {date}
        </Text>
      </Td>
      <Tr>
        <Td>
          {isEditing ? (
            <Flex>
              <Button
                p="0px"
                bg="transparent"
                variant="hover"
                onClick={handleSave}
                mr="10px"
              >
                <Text
                  fontSize="md"
                  color="gray.400"
                  fontWeight="bold"
                  cursor="pointer"
                >
                  Save
                </Text>
              </Button>
              <Button
                p="0px"
                bg="transparent"
                variant="hover"
                onClick={handleCancel}
              >
                <Text
                  fontSize="md"
                  color="gray.400"
                  fontWeight="bold"
                  cursor="pointer"
                >
                  Cancel
                </Text>
              </Button>
            </Flex>
          ) : (
            <Button
              p="0px"
              bg="transparent"
              variant="hover"
              onClick={handleEdit}
            >
              <Text
                fontSize="md"
                color="gray.400"
                fontWeight="bold"
                cursor="pointer"
              >
                Edit
              </Text>
            </Button>
          )}
        </Td>
      </Tr>
    </Tr>
  );
}

export default TablesTableRow;
