import { Container, VStack, Heading, Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Business Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>Sales</StatLabel>
              <StatNumber>345</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>Revenue</StatLabel>
              <StatNumber>$2,345</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                12.45%
              </StatHelpText>
            </Stat>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stat>
              <StatLabel>Expenses</StatLabel>
              <StatNumber>$1,234</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                8.75%
              </StatHelpText>
            </Stat>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;