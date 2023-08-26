import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { login } from 'redux/auth/operations';



const LoginSchema = yup.object({
  email: yup.string().required('Required'),
  password: yup.string().required('Required').min(7),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(
      login({
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        resetForm();
      });
  };

  return (
    <Box mt="25">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="emailLogin">Email</FormLabel>
                <Input
                  {...field}
                  id="emailLogin"
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
                  <FormLabel htmlFor="passwordLogin">Password</FormLabel>
                  <Input
                    {...field}
                    id="passwordLogin"
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
              Log in
            </Button>
          </Form>
        </Formik>
    </Box>
  );
};
