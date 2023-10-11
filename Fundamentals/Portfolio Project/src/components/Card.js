import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      borderRadius="xl"
      bgColor="white"
      align="left"
      margin="auto"
      padding="auto"
    >
      <Image borderRadius="xl" src={imageSrc} alt={title} />
      <Heading as="h2" size="md" color="black" padding="15px">
        {title}
      </Heading>
      <Text
        color="black"
        paddingRight="15px"
        paddingLeft="15px"
        paddingBottom="15px"
      >
        {description}
      </Text>
      <HStack
        spacing={2}
        paddingRight="15px"
        paddingLeft="15px"
        paddingBottom="15px"
      >
        <Text color="black">Read more</Text>
        <FontAwesomeIcon icon={faArrowRight} color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
