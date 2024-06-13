import { Container, VStack, Heading, Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import DailyGenerationGraph from "../components/DailyGenerationGraph";
import MonthlyGenerationGraph from "../components/MonthlyGenerationGraph";
import hourlyGenerationData from "../data/hourlyGenerationData";

const calculateDailyTotalGeneration = (data) => {
  return data.reduce((total, entry) => total + entry.generation, 0);
};

const calculateDailyAverageGeneration = (data) => {
  return data.reduce((total, entry) => total + entry.generation, 0) / data.length;
};

const dailyTotalGeneration = calculateDailyTotalGeneration(hourlyGenerationData);
const dailyAverageGeneration = calculateDailyAverageGeneration(hourlyGenerationData);

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          태양광 비즈니스 대시보드
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>총 발전량</StatLabel>
              <StatNumber>12,345 kWh</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                15.23%
              </StatHelpText>
            </Stat>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>소비된 에너지</StatLabel>
              <StatNumber>8,765 kWh</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                10.45%
              </StatHelpText>
            </Stat>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>전력망으로 수출된 에너지</StatLabel>
              <StatNumber>3,580 kWh</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                5.75%
              </StatHelpText>
            </Stat>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>시스템 효율</StatLabel>
              <StatNumber>92.5%</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                2.34%
              </StatHelpText>
            </Stat>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>일일 총 발전량</StatLabel>
              <StatNumber>{dailyTotalGeneration} kWh</StatNumber>
            </Stat>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>일일 평균 발전량</StatLabel>
              <StatNumber>{dailyAverageGeneration.toFixed(2)} kWh</StatNumber>
            </Stat>
          </Box>
        </SimpleGrid>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            시간대별 발전량 및 누적 발전량
          </Heading>
          <DailyGenerationGraph />
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            월간 발전량 및 누적 발전량
          </Heading>
          <MonthlyGenerationGraph />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;