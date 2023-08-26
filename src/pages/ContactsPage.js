import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { Container, Heading } from '@chakra-ui/react';


export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Heading
        as="h1"
        fontSize="3xl"
        fontWeight="400"
        textAlign="center"
        mb="5"
      >
        Phonebook
      </Heading>
      <ContactForm />
      <Heading
        as="h2"
        fontSize="3xl"
        fontWeight="400"
        textAlign="center"
        mb="5"
      >
        Contacts:
      </Heading>
      <Filter />
      <ContactList />
    </Container>
  );
}
