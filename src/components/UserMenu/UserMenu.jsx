import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';



export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/logIn');
  };

  return (
    <Box
      ml="auto"
      display="flex"
      justifyContent="center"
      alignItems="baseline"
      gap="5"
    >
      <Text fontSize="16" color="teal">{user?.email}</Text>
      <Button colorScheme="orange" variant="outline" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};
