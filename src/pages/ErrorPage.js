import { Container } from "@chakra-ui/react";
import { Link } from 'react-router-dom';


export default function ErrorPage() {
    return (
      <Container>
        <h3>The page is not available</h3>
        <Link to="/signUp">
          Go to SignUp...
        </Link>
      </Container>
    );
}