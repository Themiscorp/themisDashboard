import React, { useEffect, useState } from "react";

// Chakra imports
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Icon,
  Link,
  Progress,
  SimpleGrid,
  Spacer,
  Spinner,
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
// import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import * as GradientProgress from "@delowar/react-circle-progressbar";
import {
  BsFillPatchCheckFill,
  BsThermometerHalf,
  BsFillDropletFill,
} from "react-icons/bs";
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
import { db } from "../../firebase";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en.json";
import TimeAgo from "javascript-time-ago";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis } from "recharts";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(en);

export default function Dashboard() {
  const [stats, setStats] = useState([]);
  const [plotting, setPlotting] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetching 50 of the most recent data entries.
  useEffect(() => {
    const _query = query(
      collection(db, "stats"),
      orderBy("timestamp", "desc"),
      limit(50)
    );

    const statsDataListener = onSnapshot(_query, (snapshot) => {
      if (!snapshot.empty) {
        let dataArray = [];
        let plottingArray = [];
        snapshot.forEach((doc) => {
          dataArray.push(doc.data());
          plottingArray.push({ iaq: doc.data().iaqScore, time: `${new Date(doc.data().timestamp).getHours()}:${new Date(
            doc.data().timestamp
          ).getMinutes()}`});
        });
        setStats(dataArray);

        plottingArray.reverse();
        setPlotting(plottingArray);
        setLoading(false);
      }
    });
    return () => {
      statsDataListener();
    };
  }, []);

  console.log(stats);

  // let linechartOptions = {
  //   chart: {
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  //   tooltip: {
  //     theme: "dark",
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   stroke: {
  //     curve: "smooth",
  //   },
  //   xaxis: {
  //     type: "time",
  //     categories: plottingY,
  //     labels: {
  //       style: {
  //         colors: "#c8cfca",
  //         fontSize: "12px",
  //       },
  //     },
  //     axisBorder: {
  //       show: false,
  //     },
  //     axisTicks: {
  //       show: false,
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       style: {
  //         colors: "#c8cfca",
  //         fontSize: "12px",
  //       },
  //     },
  //   },
  //   legend: {
  //     show: false,
  //   },
  //   grid: {
  //     strokeDashArray: 5,
  //     borderColor: "#56577A",
  //   },
  //   fill: {
  //     type: "gradient",
  //     gradient: {
  //       shade: "dark",
  //       type: "vertical",
  //       shadeIntensity: 0,
  //       gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
  //       inverseColors: true,
  //       opacityFrom: 0.8,
  //       opacityTo: 0,
  //       stops: [],
  //     },
  //     colors: ["#2CD9FF", "#582CFF"],
  //   },
  //   colors: ["#2CD9FF", "#582CFF"],
  // };

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      {loading == true ? (
        <>
          <Center h={"calc(100vh - 120px)"}>
            <Spinner size={"xl"} color={"white"} />
          </Center>
        </>
      ) : (
        <>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              "2xl": "2fr 1.2fr 1.5fr",
            }}
            my="26px"
            gap="18px"
          >
            {/* Welcome Card */}
            <Card
              p="0px"
              gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
              bgImage={medusa}
              bgSize="cover"
              bgPosition="50%"
            >
              <CardBody w="100%" h="100%">
                <Flex
                  flexDirection={{ sm: "column", lg: "row" }}
                  w="100%"
                  h="100%"
                >
                  <Flex
                    flexDirection="column"
                    h="100%"
                    p="22px"
                    minW="60%"
                    lineHeight="1.6"
                  >
                    <Text fontSize="sm" color="gray.400" fontWeight="bold">
                      Hi there,
                    </Text>
                    <Text
                      fontSize="28px"
                      color="#fff"
                      fontWeight="bold"
                      mb="18px"
                    >
                      Welcome To Your Dashboard
                    </Text>
                    <Spacer />
                    <Flex align="center">
                      <Button
                        p="0px"
                        variant="no-hover"
                        bg="transparent"
                        my={{ sm: "1.5rem", lg: "0px" }}
                        as={Link}
                        href={"https://storage.googleapis.com/sacred-choir-353619.appspot.com/Final%20Project%20Report%20-%20Themis.pdf"}
                        target={"_blank"}
                      >
                        <Text
                          fontSize="sm"
                          color="#fff"
                          fontWeight="bold"
                          cursor="pointer"
                          transition="all .3s ease"
                          my={{ sm: "1.5rem", lg: "0px" }}
                          _hover={{ me: "4px" }}
                        >
                          Read Our Project Report
                        </Text>
                        <Icon
                          as={BsArrowRight}
                          w="20px"
                          h="20px"
                          color="#fff"
                          fontSize="2xl"
                          transition="all .3s ease"
                          mx=".3rem"
                          cursor="pointer"
                          pt="4px"
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
              <Flex direction="column">
                <Flex justify="space-between" align="center" mb="40px">
                  <Text color="#fff" fontSize="lg" fontWeight="bold">
                    Air Quality Score
                  </Text>
                  <Button
                    borderRadius="12px"
                    w="38px"
                    h="38px"
                    bg="#101022"
                    _hover="none"
                    _active="none"
                  >
                    <Icon as={IoEllipsisHorizontal} color="#7551FF" />
                  </Button>
                </Flex>
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  justifyContent={"space-between"}
                >
                  <Flex
                    direction="column"
                    me={{ md: "6px", lg: "52px" }}
                    mb={{ sm: "16px", md: "0px" }}
                  >
                    <Flex
                      direction="column"
                      p="22px"
                      pe={{ sm: "22e", md: "8px", lg: "22px" }}
                      minW={{ sm: "220px", md: "140px", lg: "220px" }}
                      bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                      borderRadius="20px"
                      mb="20px"
                    >
                      <Text color="gray.400" fontSize="sm" mb="4px">
                        Last Updated
                      </Text>
                      <Text color="#fff" fontSize="lg" fontWeight="bold">
                        <ReactTimeAgo
                          date={new Date(stats[0].timestamp)}
                          locale="en-US"
                          timeStyle="twitter"
                        />{" "}
                        ago
                      </Text>
                    </Flex>
                    <Flex
                      direction="column"
                      p="22px"
                      minW={{ sm: "210px", md: "140px", lg: "210px" }}
                      bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                      borderRadius="20px"
                    >
                      <Text color="gray.400" fontSize="sm" mb="4px">
                        Air Quality Level
                      </Text>
                      <Text color="#fff" fontSize="lg" fontWeight="bold">
                        {stats[0].iaqScore >= 90
                          ? "Excellent"
                          : stats[0].iaqScore >= 80
                          ? "Good"
                          : stats[0].iaqScore >= 70
                          ? "Average"
                          : stats[0].iaqScore >= 60
                          ? "Bad"
                          : "Hazardous"}
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
                          ? 200
                          : 200
                      }
                      isGradient
                      gradient={
                        stats[0].iaqScore >= 80
                          ? {
                              angle: 90,
                              startColor: "rgba(5, 205, 153, 0)",
                              stopColor: "#05CD99",
                            }
                          : stats[0].iaqScore >= 70
                          ? {
                              angle: 90,
                              startColor: "rgba(207, 183, 0, 0)",
                              stopColor: "#CFB700",
                            }
                          : {
                              angle: 90,
                              startColor: "rgba(207, 41, 0, 0)",
                              stopColor: "#CF2900",
                            }
                      }
                      emptyColor="transparent"
                    >
                      <Flex direction="column" justify="center" align="center">
                        <Text
                          color="#fff"
                          fontSize={"50px"}
                          fontWeight="bold"
                          mb="4px"
                        >
                          {Number(stats[0].iaqScore / 10).toFixed(2)}
                        </Text>
                        <Text color="gray.400" fontSize="sm">
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
              <Flex direction="column">
                <Flex justify="space-between" align="center" mb="40px">
                  <Text color="#fff" fontSize="lg" fontWeight="bold">
                    Your IAQ Details
                  </Text>
                  <Button
                    borderRadius="12px"
                    w="38px"
                    h="38px"
                    bg="#101022"
                    _hover="none"
                    _active="none"
                  >
                    <Icon as={IoEllipsisHorizontal} color="#7551FF" />
                  </Button>
                </Flex>
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  justifyContent={"space-between"}
                >
                  <Flex
                    direction="column"
                    me={{ md: "6px", lg: "0px" }}
                    mb={{ sm: "16px", md: "0px" }}
                  >
                    <Flex
                      direction="column"
                      p="22px"
                      pe={{ sm: "22e", md: "8px", lg: "22px" }}
                      minW={{ sm: "220px", md: "140px", lg: "220px" }}
                      bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                      borderRadius="20px"
                      mb="20px"
                    >
                      <Text color="gray.400" fontSize="sm" mb="4px">
                        Carbon Dioxide Levels
                      </Text>
                      <Text
                        color="#fff"
                        fontSize="lg"
                        fontWeight="bold"
                        textTransform={"capitalize"}
                      >
                        {stats[0].co2Type}
                      </Text>
                    </Flex>
                    <Flex
                      direction="column"
                      p="22px"
                      minW={{ sm: "210px", md: "140px", lg: "210px" }}
                      bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                      borderRadius="20px"
                    >
                      <Text color="gray.400" fontSize="sm" mb="4px">
                        Carbon Monoxide Levels
                      </Text>
                      <Text
                        color="#fff"
                        fontSize="lg"
                        fontWeight="bold"
                        textTransform={"capitalize"}
                      >
                        {stats[0].coType}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    direction="column"
                    me={{ md: "6px", lg: "0px" }}
                    mb={{ sm: "16px", md: "0px" }}
                  >
                    <Flex
                      direction="column"
                      p="22px"
                      pe={{ sm: "22e", md: "8px", lg: "22px" }}
                      minW={{ sm: "220px", md: "140px", lg: "220px" }}
                      bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                      borderRadius="20px"
                      mb="20px"
                    >
                      <Text color="gray.400" fontSize="sm" mb="4px">
                        Temperature Levels
                      </Text>
                      <Text
                        color="#fff"
                        fontSize="lg"
                        fontWeight="bold"
                        textTransform={"capitalize"}
                      >
                        {stats[0].temperatureType}
                      </Text>
                    </Flex>
                    <Flex
                      direction="column"
                      p="22px"
                      minW={{ sm: "210px", md: "140px", lg: "210px" }}
                      bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                      borderRadius="20px"
                    >
                      <Text color="gray.400" fontSize="sm" mb="4px">
                        Humidity Levels
                      </Text>
                      <Text
                        color="#fff"
                        fontSize="lg"
                        fontWeight="bold"
                        textTransform={"capitalize"}
                      >
                        {stats[0].humidityType}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          </Grid>

          <SimpleGrid
            columns={{ sm: 1, md: 2, xl: 4 }}
            spacing="24px"
            mb={"26px"}
          >
            {/* MiniStatistics Card */}
            <Card>
              <CardBody>
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat me="auto">
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Carbon Dioxide
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff">
                        {`${Number(stats[0].co2Value).toFixed(0)} ppm`}
                      </StatNumber>
                    </Flex>
                  </Stat>
                  <IconBox as="box" h={"45px"} w={"45px"} bg="green.300">
                    <BsFillPatchCheckFill size={"24px"} color="#fff" />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
            {/* MiniStatistics Card */}
            <Card minH="83px">
              <CardBody>
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat me="auto">
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Carbon Monoxide
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff">
                        {`${Number(stats[0].coValue).toFixed(0)} ppm`}
                      </StatNumber>
                    </Flex>
                  </Stat>
                  <IconBox as="box" h={"45px"} w={"45px"} bg="yellow.300">
                    <RiErrorWarningFill size={"24px"} color="#fff" />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
            {/* MiniStatistics Card */}
            <Card>
              <CardBody>
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat>
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Temperature
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff">
                        {`${Number(stats[0].temperatureValue).toFixed(2)} °C`}
                      </StatNumber>
                    </Flex>
                  </Stat>
                  <Spacer />
                  <IconBox as="box" h={"45px"} w={"45px"} bg="red.500">
                    <BsThermometerHalf size={"24px"} color="#fff" />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
            {/* MiniStatistics Card */}
            <Card>
              <CardBody>
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat me="auto">
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Humidity
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff" fontWeight="bold">
                        {`${Number(stats[0].humidityValue).toFixed(0)} %`}
                      </StatNumber>
                    </Flex>
                  </Stat>
                  <IconBox as="box" h={"45px"} w={"45px"} bg="gray.500">
                    <BsFillDropletFill size={"24px"} color="#fff" />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
          </SimpleGrid>

          <Grid
            templateColumns={{ sm: "1fr", lg: "1fr" }}
            maxW={{ sm: "100%", md: "100%" }}
            gap="24px"
            mb="24px"
          >
            {/* Sales Overview */}
            <Card p="28px 0px 0px 0px">
              <CardHeader mb="20px" ps="22px">
                <Flex direction="column" alignSelf="flex-start">
                  <Text fontSize="lg" color="#fff" fontWeight="bold" mb="6px">
                    Realtime Readings
                  </Text>
                </Flex>
              </CardHeader>
              <Box w="100%" minH={{ sm: "300px" }}>
                {/* <LineChart
                  lineChartData={[{
                    name: "IAQ Score",
                    data: plottingX
                  }]}
                  lineChartOptions={linechartOptions}
                /> */}
                <LineChart
                  width={1110}
                  height={300}
                  data={plotting}
                  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                  <XAxis dataKey="time" />
                  <YAxis dataKey="iaq" />
                  <Tooltip />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Line
                    type="monotone"
                    dataKey="iaq"
                    stroke="#ff7300"
                    yAxisId={0}
                  />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#387908"
                    yAxisId={1}
                  />
                </LineChart>
              </Box>
            </Card>
          </Grid>
        </>
      )}
    </Flex>
  );
}
