import { StyledForm } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import toast, { Toaster } from 'react-hot-toast';
import { selectContacts } from 'redux/contacts/selectors';
import { Formik, Field, Form } from 'formik';
import { Button, FormLabel } from '@chakra-ui/react';
import { GiSmartphone } from "react-icons/gi";
import { MdDriveFileRenameOutline } from "react-icons/md";


export const ContactForm = () => {
  const notify = () =>
    toast.success('Contact was successfully added to your contacts list.', {
      duration: 3000,
      position: 'bottom-left',
    });

  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);

  const handleAddContact = ({ name, number }, { resetForm }) => {
    const contactExists = items.some(contact => contact.name === name);

    if (contactExists) {
      toast.error(`${name} is already in contacts`, {
        duration: 3000,
        position: 'bottom-left',});
        resetForm();
      return;
    } else {
      dispatch(addContact({ name, number }))
        .unwrap()
        .then(() => {
          notify();
          resetForm();
        });
    }
  };

    return (
      <>
        <Toaster />
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          onSubmit={handleAddContact}
        >
          {props => (
            <StyledForm as={Form}>
              <FormLabel htmlFor="name">Name <MdDriveFileRenameOutline /></FormLabel>
              <Field
                id="name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <FormLabel htmlFor="number">Number <GiSmartphone /></FormLabel>
              <Field
                id="number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <Button colorScheme="teal" size="md" type="submit">
                Add contact
              </Button>
            </StyledForm>
          )}
        </Formik>
      </>
    );
  
  }
