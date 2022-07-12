import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import IconBox from "components/Icons/IconBox";
import React from "react";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, ...rest } = props;
  return (
    <Flex
      borderRadius='15px'
      flexDirection='column'
      bgImage={SidebarHelpImage}
      bgSize='cover'
      bgPosition='center'
      justifyContent='flex-end'
      alignItems='center'
      p='16px'
      minH='170px'
      minW='218px'>
      <Text fontSize='md' color='white' mb='2px'>
        Senior Design Project
      </Text>
    </Flex>
  );
}
