import { Button } from "@chakra-ui/react";

export const Contact = ({ contacts, handleDeleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <Button
          colorScheme="red"
          size='xs'
          variant="solid"
          type="button"
          onClick={() => handleDeleteContact(id)}
        >
          Delete
        </Button>
      </li>
    );
  });
};