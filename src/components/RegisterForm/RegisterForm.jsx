import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const SignUpSchema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().required('Required'),
  password: yup.string().required('Required').min(7),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
  };

  return (
    <Box mt="25">
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={SignUpSchema}
      >
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="nameSignUp">Username</FormLabel>
                <Input
                  {...field}
                  id="nameSignUp"
                  type="text"
                  placeholder="Name"
                  required
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="emailSignUp">Email</FormLabel>
                <Input
                  {...field}
                  id="emailSignUp"
                  type="email"
                  placeholder="Email"
                  required
                />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.password && form.touched.password}
              >
                <FormLabel htmlFor="passwordSignUp">Password</FormLabel>
                <Input
                  {...field}
                  id="passwordSignUp"
                  type="password"
                  pattern=".{7,}"
                  title="Password must be at least seven characters long"
                  placeholder="Password"
                  required
                />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button type="submit" size="md" mt="5" colorScheme="teal">
            Sign up
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};
