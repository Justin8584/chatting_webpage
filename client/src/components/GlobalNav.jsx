import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function GlobalNav() {
    const theme = useTheme();
    const navigate = useNavigate();
    const loggedIn = JSON.parse(localStorage.getItem("authToken"));

    // handle logout
    const handleLogout = async () => {
        try {
            await axios.post("/api/v2/auth/logout");
            localStorage.removeItem("authToken", true);
            toast.success("logout successfully ");
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box
            width={"100%"}
            backgroundColor={theme.palette.background.alt}
            p="1rem 6%"
            textAlign={"center"}
            sx={{ boxShadow: 3, mb: 2 }}
        >
            <Typography variant="h1" color={"primary"} fontWeight="bold">
                Welcome to Website
            </Typography>

            {loggedIn ? (
                <div>
                    <NavLink to="/" p={1}>
                        Home
                    </NavLink>

                    <NavLink to="/" onClick={handleLogout} p={1}>
                        Logout
                    </NavLink>
                </div>
            ) : (
                <div>
                    <NavLink to="/Login" p={1}>
                        Login
                    </NavLink>

                    <NavLink to="/register" p={1}>
                        Register
                    </NavLink>
                </div>
            )}
        </Box>
    );
}

export default GlobalNav;
