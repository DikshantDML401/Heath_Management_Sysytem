import React, { useState, useEffect } from "react";
// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  useColorModeValue,
  Input
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";

const Authors = ({ title, captions, data }) => {
  const onSave = () => {};

  const textColor = useColorModeValue("gray.700", "white");

  const [search, setSearch] = useState(""); 
  const [filteredData, setFilteredData] = useState(data); 

  useEffect(() => {
    // Filter the data based on the search query
    const filteredAuthors = data.filter((author) =>
      author.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filteredAuthors);
  }, [data, search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px">
        <Text fontSize="xl" color={textColor} fontWeight="bold" mt={1}>
          {title}
        </Text>
        <Text fontSize="xl" color={textColor} fontWeight="bold" ml={5}>
          {/* {search} */}
          {
            <div className="chakra-input__group css-1gunk34">
              <Input
                type="search"
                placeholder="Type here..."
                fontSize="13px"
                className="chakra-input css-1dpaweh"
                value={search}
                onChange={handleSearch}
              ></Input>
            </div>
          }
        </Text>
      </CardHeader>

      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
              {captions.map((caption, idx) => {
                return (
                  <Th color="gray.400" key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.length === 0 ? (
              <Tr>
                <Td colSpan={captions.length}>
                  <Text textAlign="center">No Data Available</Text>
                </Td>
              </Tr>
            ) : (
              filteredData.map((row) => (
                <TablesTableRow
                  id={row.id}
                  key={`${row.email}-${row.name}`}
                  name={row.name}
                  logo={row.logo}
                  email={row.email}
                  subdomain={row.subdomain}
                  domain={row.domain}
                  status={row.status}
                  date={row.date}
                  onSave={onSave}
                />
              ))
            )}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Authors;
