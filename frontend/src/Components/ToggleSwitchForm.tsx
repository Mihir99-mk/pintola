import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Stack } from '@chakra-ui/react';

function ToggleSwitchForm() {
  const [isForm1, setIsForm1] = useState(true);

  const toggleForm = () => {
    setIsForm1(!isForm1);
  };

  return (
    <div>
      {isForm1 ? (
        <Form1 toggleForm={toggleForm} />
      ) : (
        <Form2 toggleForm={toggleForm} />
      )}
    </div>
  );
}

function Form1({ toggleForm }:any) {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form 1 submitted');
    // Add your form 1 submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Form 1 Input</FormLabel>
        <Input type="text" placeholder="Enter value" />
      </FormControl>
      <Stack mt={4} direction="row" spacing={4} align="center">
        <Button type="submit" colorScheme="blue">Submit</Button>
        <Button onClick={toggleForm}>Toggle Form</Button>
      </Stack>
    </form>
  );
}

function Form2({ toggleForm }:any) {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form 2 submitted');
    // Add your form 2 submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Form 2 Input</FormLabel>
        <Input type="text" placeholder="Enter value" />
      </FormControl>
      <Stack mt={4} direction="row" spacing={4} align="center">
        <Button type="submit" colorScheme="blue">Submit</Button>
        <Button onClick={toggleForm}>Toggle Form</Button>
      </Stack>
    </form>
  );
}

export default ToggleSwitchForm;
