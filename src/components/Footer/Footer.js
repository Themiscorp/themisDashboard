/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px='30px'
      pb='20px'>
      <Text
        fontSize='sm'
        color='white'
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
       Made with love by Themis
      </Text>
      <Text
        fontSize='xx-small'
        color='white'
        textAlign={{
          base: "center",
          xl: "end",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        01001101 01100001 01100100 01100101 00100000 01110111 01101001 01110100 01101000 00100000 01101100 01101111 01110110 01100101 00100000 01100010 01111001 00100000 01010100 01101000 01100101 01101101 01101001 01110011
      </Text>
    </Flex>
  );
}

