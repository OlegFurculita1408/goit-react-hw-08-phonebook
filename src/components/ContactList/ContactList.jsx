import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import toast from 'react-hot-toast';
import { Contact } from 'components/Contact/Contact';
import { ContactsList } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const notify = () =>
    toast.error('Contact successfully deleted.', {
      duration: 2000,
      position: 'bottom-left',
    });

  const handleDeleteContact = id => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        notify();
      });
  };

  return (
    <ContactsList>
      <Contact
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </ContactsList>
  );
};
