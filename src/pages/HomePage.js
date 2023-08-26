import { Box, Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/selectors';
import { RiContactsBook2Fill } from 'react-icons/ri';



export default function HomePage() {
  const isAuth = useSelector(selectIsAuth);
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="calc(100vh - 50px)"
      >
        <section>
          <Heading as="h1" fontSize="4xl" fontWeight="500" textAlign="center">
            Your contact book.
          </Heading>
          <Text fontSize="2xl" fontWeight="300" textAlign="center" mt={10}>
            Let's{' '}
            {isAuth ? (
              <>
                <span>go to my </span>
                <ChakraLink
                  fontStyle="italic"
                  color="GrayText"
                  as={ReactRouterLink}
                  to="/contacts"
                >
                  contacts 
                  <RiContactsBook2Fill />
                </ChakraLink>
              </>
            ) : (
              <ChakraLink fontStyle="italic" as={ReactRouterLink} to="/logIn">
                login
              </ChakraLink>
            )}
          </Text>
        </section>
      </Box>
    </Container>
  );
}
