import { Container, VStack, Heading, Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";

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
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;