import { json } from "node:stream/consumers";
import * as React from "react";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { Box, Stack, SxProps, TextField, Theme } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClassNames } from "@emotion/react";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  const navigate = useNavigate();
  const classes:SxProps<Theme> | any={
    root:{display:'flex',justifyContent:"center"},
    buttons:{marginTop:2}
  }

  const showFormV1 = ({
    handleSubmit,
    handleChange,
    isSubmitting,
    values,
  }: FormikProps<any>) => {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username : </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={values.username}
        />
        <br />
        <label htmlFor="">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={values.password}
        />
        <br />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button onClick={() => navigate(-1)}>Back</button>
      </form>
    );
  };
  const showFormV2 = ({
    handleSubmit,
    handleChange,
    isSubmitting,
    values,
  }: FormikProps<any>) => {
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          onChange={handleChange}
          value={values.username}
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="password"
          onChange={handleChange}
          value={values.password}
          type="password"

        />
        <br />
        <Stack direction={"row"} spacing={2} sx={classes.buttons} >
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/Register")}
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
          >
            Register
          </Button>
        </Stack>

      </form>
    );
  };

  return (
    <>
      <Box sx={classes.root}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
          <Typography sx={{ fontSize: 20 ,justifyContent:"center",display:'flex'} } color="text.secondary" gutterBottom >
              <h3>Login</h3>
            </Typography>
            <Formik
              onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values));

                setTimeout(() => {
                  setSubmitting(false);
                }, 2000);
              }}
              initialValues={{ username: "", password: "" }}
            >
              {(props) => showFormV2(props)}
            </Formik>
          </CardContent>
        </Card>







      </Box>
    </>
  );
};

export default LoginPage;
