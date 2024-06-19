import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BookTicket = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to a server
    console.log({ name, email, ticketQuantity });
    setConfirmationMessage(`Thank you, ${name}! You have successfully booked ${ticketQuantity} ticket(s).`);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Book Tickets</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="ticket-quantity" isRequired>
          <FormLabel>Ticket Quantity</FormLabel>
          <Input type="number" value={ticketQuantity} onChange={(e) => setTicketQuantity(e.target.value)} min={1} />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg">Book Tickets</Button>
        {confirmationMessage && <Text color="green.500">{confirmationMessage}</Text>}
      </VStack>
    </Container>
  );
};

export default BookTicket;