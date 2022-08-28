import {
  TabContext,
  TabList,
  TabPanel,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Stack, Tab, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { UilGraduationCap, UilBriefcaseAlt } from "@iconscout/react-unicons";
import { MainContainer } from "./Main";

export default function Qualification() {
  const [value, setValue] = useState("1");

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const tabHeight = "2rem";
  return (
    <MainContainer>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
          centered
          style={{
            minHeight: tabHeight,
            height: tabHeight,
          }}
        >
          <Tab
            icon={<UilGraduationCap />}
            iconPosition="start"
            label="Education"
            value="1"
            sx={{
              minHeight: tabHeight,
              height: tabHeight,
              fontSize: (theme) => theme.typography.h5,
            }}
          />
          <Tab
            icon={<UilBriefcaseAlt />}
            iconPosition="start"
            label="Work"
            value="2"
            sx={{
              minHeight: tabHeight,
              height: tabHeight,
              fontSize: (theme) => theme.typography.h5,
            }}
          />
        </TabList>
        <TabPanel value="1" sx={{ p: 0 }}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{
                  transform: "translateY(-11.5px)",
                }}
              >
                <Stack spacing={1}>
                  <Box>
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle1,
                      }}
                    >
                      Alfa Centauri Senior High School
                    </Typography>
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle2,
                        color: "text.secondary",
                      }}
                    >
                      Science - Senior High School
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="right"
                    alignItems="center"
                  >
                    <UilBriefcaseAlt />
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle2,
                        color: "text.secondary",
                      }}
                    >
                      2012-2015
                    </Typography>
                  </Stack>
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ m: 0, backgroundColor: "primary.main" }} />
                <TimelineConnector sx={{ backgroundColor: "primary.main" }} />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{
                  transform: "translateY(-11.5px)",
                }}
              >
                <Stack spacing={1}>
                  <Box>
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle1,
                      }}
                    >
                      Sunan Gunung Djati State Islamic University
                    </Typography>
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle2,
                        color: "text.secondary",
                      }}
                    >
                      Informatics Engineering - University
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="left"
                    alignItems="center"
                  >
                    <UilBriefcaseAlt />
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle2,
                        color: "text.secondary",
                      }}
                    >
                      2016 - 2020
                    </Typography>
                  </Stack>
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ m: 0, backgroundColor: "primary.main" }} />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
          </Timeline>
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{
                  transform: "translateY(-11.5px)",
                }}
              >
                <Stack spacing={1}>
                  <Box>
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle1,
                      }}
                    >
                      Software Engineer Intern
                    </Typography>
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle2,
                        color: "text.secondary",
                      }}
                    >
                      PT. Jerbee Indonesia
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="right"
                    alignItems="center"
                  >
                    <UilBriefcaseAlt />
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle2,
                        color: "text.secondary",
                      }}
                    >
                      2018
                    </Typography>
                  </Stack>
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ m: 0, backgroundColor: "primary.main" }} />
                <TimelineConnector sx={{ backgroundColor: "primary.main" }} />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{
                  transform: "translateY(-11.5px)",
                }}
              >
                <Stack spacing={1}>
                  <Box>
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle1,
                      }}
                    >
                      Software Engineer
                    </Typography>
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle2,
                        color: "text.secondary",
                      }}
                    >
                      PT. Neuronworks Indonesia
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="left"
                    alignItems="center"
                  >
                    <UilBriefcaseAlt />
                    <Typography
                      sx={{
                        ...(theme) => theme.typography.subtitle2,
                        color: "text.secondary",
                      }}
                    >
                      2021 - Now
                    </Typography>
                  </Stack>
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ m: 0, backgroundColor: "primary.main" }} />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
          </Timeline>
        </TabPanel>
      </TabContext>
    </MainContainer>
  );
}
