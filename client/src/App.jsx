import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";

import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GlobalNav from "./components/GlobalNav";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import Chat from "./pages/Chat";
import JsConverter from "./pages/JsConverter";
import ScifiImage from "./pages/ScifiImage";

function App() {
    const theme = useMemo(() => createTheme(themeSettings(), []));

    return (
        <div>
            {/* <h1> Welcome to Website</h1> */}
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalNav />
                <Toaster />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/summary" element={<Summary />} />
                    <Route path="/paragraph" element={<Paragraph />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/js-converter" element={<JsConverter />} />
                    <Route path="/scifi-image" element={<ScifiImage />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
