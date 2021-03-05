import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import MetaTags from "react-meta-tags";
import { Tab, Nav } from "react-bootstrap";

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

//components
import { login, register } from "../redux/actions/auth";

const LoginRegister = ({ location, register, login, isAuthenticated }) => {
  let history = useHistory();
  console.log("Emmanuel");

  // Register
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    password2,
  } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register({ firstName, lastName, email, phoneNumber, password });
    console.log(formData);
    console.log("form submitted");
    history.push("/Login");
  };

  // login

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const paperStyle = {
    padding: 20,
    minHeight: 300,
    maxHeight: "auto",
    width: 580,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = {
    margin: "8px 0",
    color: "white",
    backgroundColor: "#0e9146",
  };
  const textfieldStyle = { margin: "8px 0" };

  // redirect if login
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <MetaTags>
        <title>Olive Agro | Login</title>
        <meta
          name="description"
          content="Login and Register page for olive agro admin "
        />
      </MetaTags>

      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Tab.Container defaultActiveKey="login">
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <Nav variant="pills" className="login-register-tab-list">
                <Nav.Item>
                  <Nav.Link eventKey="login">
                    <h4>Login</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="register">
                    <h4>Register</h4>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Grid>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <TextField
                    type="email"
                    value={email}
                    placeholder="eee@gmail.com"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    required
                  />
                  <TextField
                    type="password"
                    placeholder="************"
                    value={password}
                    name="password"
                    onChange={(e) => handleChange(e)}
                    style={textfieldStyle}
                    // minLength='6'
                    fullWidth
                    required
                  />
                  <div className="button-box">
                    <Typography>
                      <Link to="/">Forgot password ?</Link>
                    </Typography>
                    <Button type="submit" style={btnstyle} fullWidth>
                      Log in
                    </Button>
                  </div>
                </form>
              </Tab.Pane>
              <Tab.Pane eventKey="register">
                <form onSubmit={(e) => onSubmit(e)}>
                  <TextField
                    type="text"
                    value={firstName}
                    placeholder="First Name"
                    label="firstName"
                    onChange={(e) => onChange(e)}
                    fullWidth
                    required
                    style={textfieldStyle}
                  />
                  <TextField
                    className="p"
                    type="text"
                    value={lastName}
                    placeholder="Last Name"
                    label="lastName"
                    onChange={(e) => onChange(e)}
                    fullWidth
                    required
                    style={textfieldStyle}
                  />
                  <TextField
                    type="email"
                    value={email}
                    placeholder="eee@gmail.com"
                    label="email"
                    onChange={(e) => onChange(e)}
                    fullWidth
                    required
                    style={textfieldStyle}
                  />
                  <TextField
                    type="tel"
                    value={phoneNumber}
                    placeholder="08012345678"
                    label="phoneNumber"
                    onChange={(e) => onChange(e)}
                    fullWidth
                    required
                    style={textfieldStyle}
                  />
                  <TextField
                    type="password"
                    placeholder="************"
                    value={password}
                    label="password"
                    onChange={(e) => onChange(e)}
                    fullWidth
                    required
                    style={textfieldStyle}
                  />
                  <TextField
                    type="password"
                    placeholder="************"
                    value={password2}
                    label="password2"
                    onChange={(e) => onChange(e)}
                    // minLength='6'
                    fullWidth
                    required
                    style={textfieldStyle}
                  />
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Remember me"
                  />
                  <Button type="submit" style={btnstyle} fullWidth>
                    Register
                  </Button>
                </form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Paper>
      </Grid>
      {/* 
      <div className="login-register-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <Tab.Container defaultActiveKey="login"> */}
      {/* <Nav variant="pills" className="login-register-tab-list">
                    <Nav.Item>
                      <Nav.Link eventKey="login">
                        <h4>Login</h4>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="register">
                        <h4>Register</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav> */}
      {/* <Tab.Content> */}
      {/* <Tab.Pane eventKey="login">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form onSubmit={(e) => handleSubmit(e)}>
                            <input
                              type="email"
                              value={email}
                              placeholder="eee@gmail.com"
                              name="email"
                              onChange={(e) => handleChange(e)}
                              // required
                            />
                            <input
                              type="password"
                              placeholder="************"
                              value={password}
                              name="password"
                              onChange={(e) => handleChange(e)}
                              // minLength='6'
                            />
                            <div className="button-box">
                              <div className="login-toggle-btn">
                                <input type="checkbox" />
                                <label className="ml-10">Remember me</label>
                                <Link to={process.env.PUBLIC_URL + "/"}>
                                  Forgot Password?
                                </Link>
                              </div>
                              <button type="submit">
                                <span>Login</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Tab.Pane> */}
      {/*                     
                    <Tab.Pane eventKey="register">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form onSubmit={(e) => onSubmit(e)}>
                            <input
                              className="p"
                              type="text"
                              value={firstName}
                              placeholder="First Name"
                              name="firstName"
                              onChange={(e) => onChange(e)}
                              // required
                            />
                            <input
                              className="p"
                              type="text"
                              value={lastName}
                              placeholder="Last Name"
                              name="lastName"
                              onChange={(e) => onChange(e)}
                              // required
                            />
                            <input
                              type="email"
                              value={email}
                              placeholder="eee@gmail.com"
                              name="email"
                              onChange={(e) => onChange(e)}
                              // required
                            />
                            <input
                              type="tel"
                              value={phoneNumber}
                              placeholder="08012345678"
                              name="phoneNumber"
                              onChange={(e) => onChange(e)}
                              // required
                            />
                            <input
                              type="password"
                              placeholder="************"
                              value={password}
                              name="password"
                              onChange={(e) => onChange(e)}
                              // minLength='6'
                            />
                            <input
                              type="password"
                              placeholder="************"
                              value={password2}
                              name="password2"
                              onChange={(e) => onChange(e)}
                              // minLength='6'
                            />

                            <div className="button-box">
                              <button type="submit">
                                <span>Register</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object,
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login, register })(LoginRegister);
