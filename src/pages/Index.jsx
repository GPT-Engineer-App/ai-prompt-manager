import { Container, Text, VStack, Heading, Box, Button, SimpleGrid, Input, Textarea, IconButton, useToast, HStack } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaEdit, FaSave } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSavePrompt = () => {
    toast({
      title: "Prompt saved.",
      description: "Your AI prompt has been successfully saved.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDeletePrompt = () => {
    toast({
      title: "Prompt deleted.",
      description: "The AI prompt has been successfully deleted.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading>AI Prompt Management for WordPress</Heading>
        <Text>Manage and integrate AI-generated content directly within your WordPress site.</Text>

        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4} align="start">
            <Heading size="md">Manage Prompts</Heading>
            <SimpleGrid columns={2} spacing={4} w="full">
              <Input placeholder="Enter prompt title" />
              <Input placeholder="Enter prompt category" />
            </SimpleGrid>
            <Textarea placeholder="Enter your prompt" />
            <Button leftIcon={<FaSave />} colorScheme="blue" onClick={handleSavePrompt}>
              Save Prompt
            </Button>
          </VStack>
        </Box>

        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4} align="start">
            <Heading size="md">Your Prompts</Heading>
            <VStack spacing={4} divider={<Box borderColor="gray.200" borderWidth="1px" w="full" />}>
              <HStack justify="space-between" w="full">
                <Text>Prompt 1: Generate blog ideas</Text>
                <HStack>
                  <IconButton aria-label="Edit prompt" icon={<FaEdit />} />
                  <IconButton aria-label="Delete prompt" icon={<FaTrash />} colorScheme="red" onClick={handleDeletePrompt} />
                </HStack>
              </HStack>
              <HStack justify="space-between" w="full">
                <Text>Prompt 2: Create marketing content</Text>
                <HStack>
                  <IconButton aria-label="Edit prompt" icon={<FaEdit />} />
                  <IconButton aria-label="Delete prompt" icon={<FaTrash />} colorScheme="red" onClick={handleDeletePrompt} />
                </HStack>
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
