// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import { tablesTableData, dashboardTableData, handleButton } from "variables/general";

function Tables() {

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Authors
        title={"Authors Table"}
        doctorDetail={handleButton}
        captions={["Author", "Function", "Status", "Employed", ""]}
        data={tablesTableData}
      />
      <Projects 
        title={"Projects Table"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default Tables;
