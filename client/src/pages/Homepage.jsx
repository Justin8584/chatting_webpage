import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Typography, Card, Stack } from "@mui/material";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import Code from "@mui/icons-material/Code";
import Image from "@mui/icons-material/Image";
import { bold } from "colors";

function Homepage() {
    const navigate = useNavigate();

    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                {/* Summarize */}
                <Box p={2}>
                    <Typography variant="h4" mb={2} color={"primary"} fontWeight="bold">
                        Text Generation
                    </Typography>

                    <Card
                        onClick={() => navigate("/summary")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 190,
                            width: 200,
                            "&:hover": {
                                border: 2,
                                boxShadow: 2,
                                borderColor: "primary.dark",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <DescriptionRounded
                            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
                        />

                        <Stack p={3} pt={0}>
                            <Typography fontWeight={bold} variant="h5">
                                Text Summary
                            </Typography>

                            <Typography variant="h6">
                                Summary Long Text into Short Content
                            </Typography>
                        </Stack>
                    </Card>
                </Box>

                {/* Paragraph */}
                <Box p={2}>
                    <Typography variant="h4" mb={2} color={"primary"} fontWeight="bold">
                        Paragraph Generation
                    </Typography>

                    <Card
                        onClick={() => navigate("/paragraph")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 190,
                            width: 200,
                            "&:hover": {
                                border: 2,
                                boxShadow: 2,
                                borderColor: "primary.dark",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <FormatAlignLeftOutlined
                            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
                        />

                        <Stack p={3} pt={0}>
                            <Typography fontWeight={bold} variant="h5">
                                Paragraph
                            </Typography>

                            <Typography variant="h6">
                                Generate Paragraph based on Your Words
                            </Typography>
                        </Stack>
                    </Card>
                </Box>

                {/* Chat Bot */}
                <Box p={2}>
                    <Typography variant="h4" mb={2} color={"primary"} fontWeight="bold">
                        Chat Bot
                    </Typography>

                    <Card
                        onClick={() => navigate("/chat")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 190,
                            width: 200,
                            "&:hover": {
                                border: 2,
                                boxShadow: 2,
                                borderColor: "primary.dark",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <ChatRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />

                        <Stack p={3} pt={0}>
                            <Typography fontWeight={bold} variant="h5">
                                Chat Bot
                            </Typography>

                            <Typography variant="h6">Chatting bot for any questions</Typography>
                        </Stack>
                    </Card>
                </Box>

                {/* JS Converter */}
                <Box p={2}>
                    <Typography variant="h4" mb={2} color={"primary"} fontWeight="bold">
                        JavaScript Converter
                    </Typography>

                    <Card
                        onClick={() => navigate("/js-converter")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 190,
                            width: 200,
                            "&:hover": {
                                border: 2,
                                boxShadow: 2,
                                borderColor: "primary.dark",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <Code sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />

                        <Stack p={3} pt={0}>
                            <Typography fontWeight={bold} variant="h5">
                                JavaScript Converter
                            </Typography>

                            <Typography variant="h6">Translate to other Languages</Typography>
                        </Stack>
                    </Card>
                </Box>

                {/* AI Generated SCIFI Image */}
                <Box p={2}>
                    <Typography variant="h4" mb={2} color={"primary"} fontWeight="bold">
                        AI SciFi Image
                    </Typography>

                    <Card
                        onClick={() => navigate("/scifi-image")}
                        sx={{
                            boxShadow: 2,
                            borderRadius: 5,
                            height: 190,
                            width: 200,
                            "&:hover": {
                                border: 2,
                                boxShadow: 2,
                                borderColor: "primary.dark",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <Image sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />

                        <Stack p={3} pt={0}>
                            <Typography fontWeight={bold} variant="h5">
                                SciFi Image Maker
                            </Typography>

                            <Typography variant="h6">Make SciFi Image by AI</Typography>
                        </Stack>
                    </Card>
                </Box>
            </Box>
        </div>
    );
}

export default Homepage;
