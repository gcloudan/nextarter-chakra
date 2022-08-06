import { Grid, Heading, Text } from "@chakra-ui/react";

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        cometlabs™
      </Heading>

      <Text fontSize="xs" color="gray.500">
        Say welcome to a brand new experience.
      </Text>
    </Grid>
  );
};

export default SomeText;
