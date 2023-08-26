import { Box } from '@chakra-ui/react';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <Box as="header" bg="snow-white" boxShadow="lg" p="6" rounded="sx" mb="30px">
      <Navigation />
    </Box>
  );
};
