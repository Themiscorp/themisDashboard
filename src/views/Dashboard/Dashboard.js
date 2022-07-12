
import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

// Styles for the circular progressbar
import "react-circular-progressbar/dist/styles.css";
import medusa from "assets/img/cardimgfree.png";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import * as GradientProgress from "@delowar/react-circle-progressbar";
import { BsFillPatchCheckFill, BsThermometerHalf, BsFillDropletFill } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";

// Icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import { BsArrowRight } from "react-icons/bs";
import {
  IoCheckmarkDoneCircleSharp,
  IoEllipsisHorizontal,
} from "react-icons/io5";
import { BiHappy } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

// Data
import {
  barChartDataDashboard,
  barChartOptionsDashboard,
  lineChartDataDashboard,
  lineChartOptionsDashboard,
} from "variables/charts";
import { dashboardTableData, timelineData } from "variables/general";

export default function Dashboard() {
  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", "2xl": "2fr 1.2fr 1.5fr" }}
        my='26px'
        gap='18px'>
        {/* Welcome Card */}
        <Card
          p='0px'
          gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
          bgImage={medusa}
          bgSize='cover'
          bgPosition='50%'>
          <CardBody w='100%' h='100%'>
            <Flex flexDirection={{ sm: "column", lg: "row" }} w='100%' h='100%'>
              <Flex
                flexDirection='column'
                h='100%'
                p='22px'
                minW='60%'
                lineHeight='1.6'>
                <Text fontSize='sm' color='gray.400' fontWeight='bold'>
                  Hi there,
                </Text>
                <Text fontSize='28px' color='#fff' fontWeight='bold' mb='18px'>
                  Welcome To Your Dashboard
                </Text>
                <Spacer />
                <Flex align='center'>
                  <Button
                    p='0px'
                    variant='no-hover'
                    bg='transparent'
                    my={{ sm: "1.5rem", lg: "0px" }}>
                    <Text
                      fontSize='sm'
                      color='#fff'
                      fontWeight='bold'
                      cursor='pointer'
                      transition='all .3s ease'
                      my={{ sm: "1.5rem", lg: "0px" }}
                      _hover={{ me: "4px" }}>
                      Read Our Project Report
                    </Text>
                    <Icon
                      as={BsArrowRight}
                      w='20px'
                      h='20px'
                      color='#fff'
                      fontSize='2xl'
                      transition='all .3s ease'
                      mx='.3rem'
                      cursor='pointer'
                      pt='4px'
                      _hover={{ transform: "translateX(20%)" }}
                    />
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        {/* Referral Tracking */}
        <Card gridArea={{ md: "2 / 1 / 3 / 2", "2xl": "auto" }}>
          <Flex direction='column'>
            <Flex justify='space-between' align='center' mb='40px'>
              <Text color='#fff' fontSize='lg' fontWeight='bold'>
                Air Quality Score
              </Text>
              <Button
                borderRadius='12px'
                w='38px'
                h='38px'
                bg='#101022'
                _hover='none'
                _active='none'>
                <Icon as={IoEllipsisHorizontal} color='#7551FF' />
              </Button>
            </Flex>
            <Flex direction={{ sm: "column", md: "row" }}>
              <Flex
                direction='column'
                me={{ md: "6px", lg: "52px" }}
                mb={{ sm: "16px", md: "0px" }}>
                  <Flex
                  direction='column'
                  p='22px'
                  pe={{ sm: "22e", md: "8px", lg: "22px" }}
                  minW={{ sm: "220px", md: "140px", lg: "220px" }}
                  bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
                  borderRadius='20px'
                  mb='20px'>
                  <Text color='gray.400' fontSize='sm' mb='4px'>
                  Last Updated
                  </Text>
                  <Text color='#fff' fontSize='lg' fontWeight='bold'>
                  X seconds ago
                  </Text>
                </Flex>
                <Flex
                  direction='column'
                  p='22px'
                  pe={{ sm: "22px", md: "8px", lg: "22px" }}
                  minW={{ sm: "170px", md: "140px", lg: "170px" }}
                  bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
                  borderRadius='20px'>
                  <Text color='gray.400' fontSize='sm' mb='4px'>
                    Risk Level
                  </Text>
                  <Text color='#fff' fontSize='lg' fontWeight='bold'>
                    Low
                  </Text>
                </Flex>
              </Flex>
              <Box mx={{ sm: "auto", md: "0px" }}>
                <GradientProgress
                  percent={70}
                  viewport
                  size={
                    window.innerWidth >= 1024
                      ? 200
                      : window.innerWidth >= 768
                      ? 170
                      : 200
                  }
                  isGradient
                  gradient={{
                    angle: 90,
                    startColor: "rgba(5, 205, 153, 0)",
                    stopColor: "#05CD99",
                  }}
                  emptyColor='transparent'>
                  <Flex direction='column' justify='center' align='center'>
                    <Text
                      color='#fff'
                      fontSize={{ md: "36px", lg: "50px" }}
                      fontWeight='bold'
                      mb='4px'>
                      9.3
                    </Text>
                    <Text color='gray.400' fontSize='sm'>
                      out of 10
                    </Text>
                  </Flex>
                </GradientProgress>
              </Box>
            </Flex>
          </Flex>
        </Card>
        {/* Satisfaction Rate */}
        <Card gridArea={{ md: "2 / 2 / 3 / 3", "2xl": "auto" }}>
          <CardHeader mb='24px'>
            <Flex direction='column'>
              <Text color='#fff' fontSize='lg' fontWeight='bold' mb='4px'>
                How would you rate Themis?
              </Text>
              <Text color='gray.400' fontSize='sm'>
                From Tech to the Experience, let us know.
              </Text>
            </Flex>
          </CardHeader>
          <Flex direction='column' justify='center' align='center'>
            <Box zIndex='-1'>
              <GradientProgress
                percent={80}
                viewport
                size={200}
                isGradient
                gradient={{
                  angle: 90,
                  startColor: "rgba(117, 81, 255, 0)",
                  stopColor: "#582CFF",
                }}
                emptyColor='#22234B'>
                <IconBox
                  bg='brand.200'
                  borderRadius='50%'
                  w='48px'
                  h='48px'
                  transform={{
                    sm: "translateY(-60%)",
                    md: "translateY(-30%)",
                  }}>
                  <Icon as={BiHappy} color='#fff' w='30px' h='30px' />
                </IconBox>
              </GradientProgress>
            </Box>
            <Stack
              direction='row'
              spacing={{ sm: "42px", md: "68px" }}
              justify='center'
              maxW={{ sm: "270px", md: "300px", lg: "100%" }}
              mx={{ sm: "auto", md: "0px" }}
              p='18px 22px'
              bg='linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgba(10, 14, 35) 91.2%)'
              borderRadius='20px'
              position='absolute'
              bottom='5%'>
              <Text fontSize='xs' color='gray.400'>
                0%
              </Text>
              <Flex direction='column' align='center' minW='80px'>
                <Text color='#fff' fontSize='28px' fontWeight='bold'>
                  95%
                </Text>
                <Text fontSize='xs' color='gray.400'>
                  Based on likes
                </Text>
              </Flex>
              <Text fontSize='xs' color='gray.400'>
                100%
              </Text>
            </Stack>
          </Flex>
        </Card>
      </Grid>

      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' mb={"26px"}>
        {/* MiniStatistics Card */}
        <Card>
          <CardBody>
            <Flex flexDirection='row' align='center' justify='center' w='100%'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='sm'
                  color='gray.400'
                  fontWeight='bold'
                  pb='2px'>
                  Carbon Dioxide
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color='#fff'>
                    1068 ppm
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox as='box' h={"45px"} w={"45px"} bg='green.300'>
                <BsFillPatchCheckFill size={"24px"} color='#fff' />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        {/* MiniStatistics Card */}
        <Card minH='83px'>
          <CardBody>
            <Flex flexDirection='row' align='center' justify='center' w='100%'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='sm'
                  color='gray.400'
                  fontWeight='bold'
                  pb='2px'>
                  Carbon Monoxide
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color='#fff'>
                    0 ppm
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox as='box' h={"45px"} w={"45px"} bg='yellow.300'>
                <RiErrorWarningFill size={"24px"} color='#fff' />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        {/* MiniStatistics Card */}
        <Card>
          <CardBody>
            <Flex flexDirection='row' align='center' justify='center' w='100%'>
              <Stat>
                <StatLabel
                  fontSize='sm'
                  color='gray.400'
                  fontWeight='bold'
                  pb='2px'>
                  Temperature
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color='#fff'>
                    {`25.5 °C`}
                  </StatNumber>
                </Flex>
              </Stat>
              <Spacer />
              <IconBox as='box' h={"45px"} w={"45px"} bg='red.500'>
                <BsThermometerHalf size={"24px"} color='#fff' />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        {/* MiniStatistics Card */}
        <Card>
          <CardBody>
            <Flex flexDirection='row' align='center' justify='center' w='100%'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='sm'
                  color='gray.400'
                  fontWeight='bold'
                  pb='2px'>
                  Humidity
                </StatLabel>
                <Flex>
                  <StatNumber fontSize='lg' color='#fff' fontWeight='bold'>
                    0
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox as='box' h={"45px"} w={"45px"} bg='gray.500'>
                <BsFillDropletFill size={"24px"} color='#fff' />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
      
      <Grid
        templateColumns={{ sm: "1fr", lg: "1fr" }}
        maxW={{ sm: "100%", md: "100%" }}
        gap='24px'
        mb='24px'>
        {/* Sales Overview */}
        <Card p='28px 0px 0px 0px'>
          <CardHeader mb='20px' ps='22px'>
            <Flex direction='column' alignSelf='flex-start'>
              <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
                Realtime Readings
              </Text>
            </Flex>
          </CardHeader>
          <Box w='100%' minH={{ sm: "300px" }}>
            <LineChart
              lineChartData={lineChartDataDashboard}
              lineChartOptions={lineChartOptionsDashboard}
            />
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
}
