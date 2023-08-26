import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Container, Link as ChakraLink, Button } from '@chakra-ui/react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/selectors';
import { ImHome } from "react-icons/im";
import { AiFillContacts } from "react-icons/ai";



export const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);
    return (
      <Container>
        <Box
          as="nav"
          display="flex"
          alignItems="center"
          justifyContent="start"
          gap="15"
        >
          <ChakraLink fontSize="18" as={ReactRouterLink} to="/">
            <ImHome />
            Home
          </ChakraLink>
          {isAuth ? (
            <>
              <ChakraLink fontSize="18" as={ReactRouterLink} to="/contacts">
                <AiFillContacts />
                Contacts
              </ChakraLink>
              <UserMenu />
            </>
          ) : (
            <Box display="flex" gap="10" ml="auto">
              <Button
                as={ReactRouterLink}
                colorScheme="teal"
                variant="outline"
                to="/signUp"
              >
                Sign up
              </Button>
              <Button
                colorScheme="teal"
                variant="outline"
                as={ReactRouterLink}
                to="/logIn"
              >
                Log in
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    );
};
