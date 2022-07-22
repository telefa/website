import { useState } from "react";

import {
    colors as Colors,
    Container,
    Grid,
    Paper,
    Typography,
    Box,
    Tab, Divider,
} from "@mui/material";

import {
    TabList,
    TabPanel,
    TabContext
} from "@mui/lab";

import {
    Security,
} from "@mui/icons-material";

import TelegramLogo from "../assets/images/telegram_logo.png";

import WhatTab from "../components/hometabs/what";
import DocsTab from "../components/hometabs/docs";
import Opensource from "../components/hometabs/opensource";

const HomePage = () => {
    const [tab, setTab] = useState('1');
    const changeTab = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Container
            maxWidth="xl"
            sx={{
                mt: "2rem",
                mb: "2rem",
            }}
        >
            <Box
                sx={{
                    mb: "1rem",
                }}
            >
                <Grid
                    columns={{ md: 12, xs: 6 }}
                    spacing={2}
                    container
                >
                    <Grid
                        xs={6}
                        item
                    >
                        <Box
                            sx={{
                                p: 5
                            }}
                        >
                            <Typography
                                variant="h2"
                                fontWeight="700"
                                fontSize={70}
                                fontFamily="Edu SA Beginner"
                                color="primary"
                            >
                                A modern authentication platform
                            </Typography>
                            <br />
                            <br />
                            <Paper
                                variant="outlined"
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: 10,
                                    borderColor: "none"
                                }}
                            >
                                <TabContext value={tab}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={changeTab} aria-label="lab API tabs example">
                                            <Tab
                                                label="What is TFA?"
                                                value="1"
                                            />
                                            <Tab
                                                label="For developers"
                                                value="2"
                                            />
                                            <Tab
                                                label="Open-Source"
                                                value="3"
                                            />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <WhatTab />
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <DocsTab />
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <Opensource />
                                    </TabPanel>
                                </TabContext>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid
                        xs={6}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Box
                                component="img"
                                src={TelegramLogo}
                                alt="Telegram Logo"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Container
                maxWidth="md"
            >
                <Box
                    sx={{
                        textAlign: "center",
                        p: 5,
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight={700}
                        fontSize={40}
                        color="primary"
                        gutterBottom
                    >
                        Why TFA?
                    </Typography>
                    <Typography
                        color="text-secondary"
                        paragraph
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
                        rhoncus aenean vel elit scelerisque
                    </Typography>
                </Box>
            </Container>
            <Container>
                <Grid
                    columns={{ xs: 4, md: 12 }}
                    spacing={10}
                    container
                >
                    <Grid
                        xs={4}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 90,
                                    mb: "1rem",
                                }}
                            />
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Title
                            </Typography>
                            <Typography
                                paragraf
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        xs={4}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 90,
                                    mb: "1rem",
                                }}
                            />
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Title
                            </Typography>
                            <Typography
                                paragraf
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        xs={4}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 90,
                                    mb: "1rem",
                                }}
                            />
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Title
                            </Typography>
                            <Typography
                                paragraf
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <Divider />
            <br />
            <Container
                sx={{
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight={700}
                    fontSize={35}
                    color="primary"
                    gutterBottom
                >
                    Our partners
                </Typography>
                <br />
                <Grid
                    columns={{ xs: 1, md: 6 }}
                    spacing={10}
                    container
                >
                    <Grid
                        xs={1}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 70,
                                    mb: "1rem",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        xs={1}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 70,
                                    mb: "1rem",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        xs={1}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 70,
                                    mb: "1rem",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        xs={1}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 70,
                                    mb: "1rem",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        xs={1}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 70,
                                    mb: "1rem",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        xs={1}
                        item
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Security
                                color="primary"
                                sx={{
                                    fontSize: 70,
                                    mb: "1rem",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default HomePage;