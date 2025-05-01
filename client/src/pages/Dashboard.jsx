import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";
import { useSelector } from "react-redux";
import image from "../assets/image1.svg";

const Dashboard = () => {
  return (
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 2, mt: 10 }}>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                textAlign: "center",
                padding: 2,
                width: "350px",
              }}
            >
              <CardContent>
                <Typography variant="h5">Welcome back!</Typography>
                <Typography>Continue with your progress</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={image}
                    alt="image"
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      borderRadius: "8px",
                    }}
                  />
                  <Button variant="contained" color="primary">
                    Go to course
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              width: "850px",
            }}
          >
            <CardContent sx={{ mt: 2, ml: 6, height: "10px" }}>
              <Typography variant="h5">Your Courses</Typography>
            </CardContent>

            <Grid container spacing={4} sx={{ margin: "40px" }}>
              {/* Left Side */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    backgroundColor: "#f8bbd0", // Light pink
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    padding: 2,
                    width: "350px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5">
                      Introduction to Programming
                    </Typography>
                    <Typography>6/10 Lessons</Typography>
                    <Box sx={{ mt: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={(6 / 10) * 100} // Calculate progress percentage
                        sx={{
                          height: 8, // Adjust the height of the progress bar
                          borderRadius: 4, // Add rounded corners
                          backgroundColor: "#e0e0e0", // Background color for the progress bar
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#f06292", // Progress bar color
                          },
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    backgroundColor: "#c5cae9", // Light purple
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    padding: 2,
                    mt: 2, // Add margin between cards
                  }}
                >
                  <CardContent>
                    <Typography variant="h5">Machine Learning</Typography>
                    <Typography>4/8 Lessons</Typography>
                    <Box sx={{ mt: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={(4 / 10) * 100} // Calculate progress percentage
                        sx={{
                          height: 8, // Adjust the height of the progress bar
                          borderRadius: 4, // Add rounded corners
                          backgroundColor: "#e0e0e0", // Background color for the progress bar
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#f06292", // Progress bar color
                          },
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Right Side */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    backgroundColor: "#b2dfdb", // Light teal
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    padding: 2,
                    width: "350px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5">Data Structures</Typography>
                    <Typography>3/5 Lessons</Typography>
                    <Box sx={{ mt: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={(3 / 5) * 100} // Calculate progress percentage
                        sx={{
                          height: 8, // Adjust the height of the progress bar
                          borderRadius: 4, // Add rounded corners
                          backgroundColor: "#e0e0e0", // Background color for the progress bar
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#f06292", // Progress bar color
                          },
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    backgroundColor: "#ffe082", // Light yellow
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    padding: 2,
                    mt: 2, // Add margin between cards
                  }}
                >
                  <CardContent>
                    <Typography variant="h5">Web Development</Typography>
                    <Typography>8/12 Lessons</Typography>
                    <Box sx={{ mt: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={(8 / 12) * 100} // Calculate progress percentage
                        sx={{
                          height: 8, // Adjust the height of the progress bar
                          borderRadius: 4, // Add rounded corners
                          backgroundColor: "#e0e0e0", // Background color for the progress bar
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#f06292", // Progress bar color
                          },
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              width: "450px",
              marginTop: "20px",
            }}
          >
            <CardContent sx={{ mt: 2, ml: 6, height: "10px" }}>
              <Typography variant="h5">Upcoming Assignments</Typography>
            </CardContent>

            <Grid container spacing={4} sx={{ margin: "40px" }}>
              {/* Left Side */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    // backgroundColor: "#f8bbd0", // Light pink
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    padding: 2,
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center", // Align items vertically
                        width: "350px",
                      }}
                    >
                      <Typography variant="h6">
                        Introduction to Programming
                      </Typography>
                      <Box sx={{ width: "50%" }}>
                        {" "}
                        <Typography>30 April 25</Typography>
                        <LinearProgress
                          variant="determinate"
                          value={(6 / 10) * 100}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "#e0e0e0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#f06292",
                            },
                          }}
                        />
                      </Box>
                    </Box>
                    <Typography>30 April 25</Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    // backgroundColor: "#c5cae9", // Light purple
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    padding: 2,
                    mt: 2, // Add margin between cards
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center", // Align items vertically
                        width: "350px",
                      }}
                    >
                      <Typography variant="h6">Data Structures</Typography>
                      <Box sx={{ width: "50%" }}>
                        {" "}
                        <Typography>30 April 25</Typography>
                        <LinearProgress
                          variant="determinate"
                          value={(6 / 10) * 100}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "#e0e0e0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#f06292",
                            },
                          }}
                        />
                      </Box>
                    </Box>
                    <Typography>30 April 25</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Card
                sx={{
                  // backgroundColor: "#b2dfdb", // Light teal
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  padding: 2,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center", // Align items vertically
                      width: "350px",
                    }}
                  >
                    <Typography variant="h6">Machine Learning</Typography>
                    <Box sx={{ width: "50%" }}>
                      {" "}
                      <Typography>30 April 25</Typography>
                      <LinearProgress
                        variant="determinate"
                        value={(6 / 10) * 100}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: "#e0e0e0",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#f06292",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography>30 April 25</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  // backgroundColor: "#ffe082", // Light yellow
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  padding: 2,
                  mt: 2, // Add margin between cards
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center", // Align items vertically
                      width: "350px",
                    }}
                  >
                    <Typography variant="h6">Web Development</Typography>
                    <Box sx={{ width: "50%" }}>
                      {" "}
                      <Typography>30 April 25</Typography>
                      <LinearProgress
                        variant="determinate"
                        value={(6 / 10) * 100}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: "#e0e0e0",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#f06292",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography>30 April 25</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid
            sx={{
              backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              width: "450px",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <CardContent sx={{ mt: 2, ml: 6, height: "10px" }}>
              <Typography variant="h5">Announcements</Typography>
            </CardContent>

            <Grid container spacing={4} sx={{ margin: "40px" }}>
              {/* Left Side */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    // backgroundColor: "#f8bbd0", // Light pink
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    padding: 2,
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center", // Align items vertically
                        width: "350px",
                      }}
                    >
                      <Typography variant="h6">
                        Introduction to Programming
                      </Typography>
                      {/* <Box sx={{ width: "50%" }}>
                        {" "}
                        <Typography>30 April 25</Typography>
                        <LinearProgress
                          variant="determinate"
                          value={(6 / 10) * 100}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "#e0e0e0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#f06292",
                            },
                          }}
                        />
                      </Box> */}
                    </Box>
                    <Typography>30 April 25</Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    // backgroundColor: "#c5cae9", // Light purple
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    padding: 2,
                    mt: 2, // Add margin between cards
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center", // Align items vertically
                        width: "350px",
                      }}
                    >
                      <Typography variant="h6">Data Structures</Typography>
                      {/* <Box sx={{ width: "50%" }}>
                        {" "}
                        <Typography>30 April 25</Typography>
                        <LinearProgress
                          variant="determinate"
                          value={(6 / 10) * 100}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "#e0e0e0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#f06292",
                            },
                          }}
                        />
                      </Box> */}
                    </Box>
                    <Typography>30 April 25</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Card
                sx={{
                  // backgroundColor: "#b2dfdb", // Light teal
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  padding: 2,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center", // Align items vertically
                      width: "350px",
                    }}
                  >
                    <Typography variant="h6">Machine Learning</Typography>
                    {/* <Box sx={{ width: "50%" }}>
                        {" "}
                        <Typography>30 April 25</Typography>
                        <LinearProgress
                          variant="determinate"
                          value={(6 / 10) * 100}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "#e0e0e0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#f06292",
                            },
                          }}
                        />
                      </Box> */}
                  </Box>
                  <Typography>30 April 25</Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  // backgroundColor: "#ffe082", // Light yellow
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  padding: 2,
                  mt: 2, // Add margin between cards
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center", // Align items vertically
                      width: "350px",
                    }}
                  >
                    <Typography variant="h6">Web Development</Typography>
                    {/* <Box sx={{ width: "50%" }}>
                        {" "}
                        <Typography>30 April 25</Typography>
                        <LinearProgress
                          variant="determinate"
                          value={(6 / 10) * 100}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "#e0e0e0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#f06292",
                            },
                          }}
                        />
                      </Box> */}
                  </Box>
                  <Typography>30 April 25</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  );
};

export default Dashboard;
