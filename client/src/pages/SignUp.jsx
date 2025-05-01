import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  InputAdornment,
  Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import BadgeIcon from "@mui/icons-material/Badge";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import signup from "../assets/signup.svg";
import axios from "axios";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  userType: "",
  parentId: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [form, setForm] = useState({ ...initialState });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let formErrors = {};

    formErrors.email = form.email ? "" : "Email is required";
    formErrors.firstName = form.firstName ? "" : "First name is required";
    formErrors.lastName = form.lastName ? "" : "First name is required";
    formErrors.userType = form.userType ? "" : "User type is required";
    if (form.userType === "Child") {
      formErrors.parentId = form.parentId ? "" : "Parent ID is required";
    }
    formErrors.password = form.password ? "" : "Password is required";
    formErrors.confirmPassword = form.confirmPassword
      ? form.password === form.confirmPassword
        ? ""
        : "Passwords do not match"
      : "Confirm Password is required";

    setErrors(formErrors);
    return Object.values(formErrors).every((x) => x === "");
  };
  console.log({form, errors})

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     console.log("Form submitted:", form);
  //     // Submit form logic here
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", form);

      try {
        const payload = {
          email: form.email,
          firstname: form.firstName,
          lastname: form.lastName,
          usertype: form.userType,
          parent_id: form.userType === "child" ? form.parentId : null,
          password: form.password,
        };

        const response = await axios.post(
          "http://localhost:5000/api/signup",
          payload
        );

        console.log("Signup successful:", response.data);
        alert("User registered successfully!");
      } catch (error) {
        console.error("Signup error:", error.response?.data || error.message);
        alert(error.response?.data?.error || "Signup failed");
      }
    }
  };

  return (
    <Grid container>
      {/* Left: Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5", // Light background color
          width: "50%",
          height: "100vh",
        }}
      >
        <img
          src={signup}
          alt="Sign Up"
          style={{
            width: "90%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Grid>

      {/* Right: Form */}
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: 400,
            width: "100%",
            height: "auto",
            boxShadow: 3,
            borderRadius: 2,
            p: 3,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Create an Account
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              select
              label="User Type"
              name="userType"
              value={form.userType}
              onChange={handleChange}
              error={!!errors.userType}
              helperText={errors.userType}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SupervisedUserCircleIcon />
                  </InputAdornment>
                ),
              }}
            >
              <MenuItem value="Parent">Parent</MenuItem>
              <MenuItem value="Child">Child</MenuItem>
            </TextField>

            {form.userType === "Child" && (
              <TextField
                margin="normal"
                fullWidth
                label="Parent ID"
                name="parentId"
                value={form.parentId}
                onChange={handleChange}
                error={!!errors.parentId}
                helperText={errors.parentId}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}

            <TextField
              margin="normal"
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant="body2" color="textSecondary" align="center">
              By signing up, you agree to our{" "}
              <a
                href="/terms"
                style={{ textDecoration: "none", color: "#3f51b5" }}
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                style={{ textDecoration: "none", color: "#3f51b5" }}
              >
                Privacy Policy
              </a>
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Sign Up
            </Button>
            <hr style={{ margin: "20px 0", textAlign: "center" }} />
            <Typography variant="body2" align="center">
              Already have an account?{" "}
              <a
                href="/login"
                style={{ textDecoration: "none", color: "#3f51b5" }}
              >
                Sign In
              </a>
            </Typography>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
