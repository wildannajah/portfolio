import { Box, Collapse, Grid, Stack, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import Iconify from "../../components/Iconify";
import useResponsive from "../../hooks/useResponsive";
import typography from "../../theme/typography";
import { MainContainer } from "./Main";

interface SubSkillsProps {
  category: string;
  experience: string;
  icon: ReactNode;
  skills: {
    name: string;
    fluential: number;
  }[];
}

function SubSkills({ category, experience, icon, skills }: SubSkillsProps) {
  const [open, setOpen] = useState(false);
  const smUp = useResponsive("up", "sm");
  return (
    <Box
      onClick={() => setOpen(!open)}
      sx={{
        cursor: smUp ? "pointer" : "",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={3} alignItems="center">
          {icon}
          <Stack spacing={0.1}>
            <Typography
              sx={{
                ...typography.h6,
              }}
            >
              {category}
            </Typography>
            <Typography
              sx={{
                ...typography.subtitle2,
                color: "text.secondary",
              }}
            >
              {experience}
            </Typography>
          </Stack>
        </Stack>

        <Iconify
          icon="mdi:chevron-up"
          fontSize={24}
          sx={{
            transform: open ? "rotate(180deg)" : "",
            transition: ".4s",
            color: "primary.main",
          }}
        />
      </Stack>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack spacing={3}>
          {" "}
          {skills.map(({ name, fluential }) => (
            <Stack spacing={1} key={name}>
              <Stack direction="row" justifyContent="space-between">
                <Typography>{name}</Typography>
                <Typography>{fluential}%</Typography>
              </Stack>
              <Box
                className="w-full rounded-full"
                sx={{
                  backgroundColor: "primary.lighter",
                }}
              >
                <Box
                  className="text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  sx={{
                    width: `${fluential}%`,
                    backgroundColor: "primary.main",
                    transition: "width 2s",
                  }}
                >
                  {" "}
                </Box>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
}

export default function Skills() {
  const SkillSet: SubSkillsProps[] = [
    {
      category: "Frontend Developer",
      experience: "More than 1 year",
      icon: (
        <Iconify
          icon="uil:brackets-curly"
          fontSize={24}
          sx={{
            color: "primary.main",
          }}
        />
      ),
      skills: [
        {
          name: "HTML",
          fluential: 90,
        },
        {
          name: "CSS",
          fluential: 80,
        },
        {
          name: "Javascript",
          fluential: 85,
        },
        {
          name: "ReactJs",
          fluential: 80,
        },
      ],
    },
    {
      category: "Backend Developer",
      experience: "More than 1 year",
      icon: (
        <Iconify
          icon="uil:brackets-curly"
          fontSize={24}
          sx={{
            color: "primary.main",
          }}
        />
      ),
      skills: [
        {
          name: "PHP",
          fluential: 80,
        },
        {
          name: "NodeJs",
          fluential: 70,
        },
        {
          name: "Python",
          fluential: 75,
        },
        {
          name: "SQL",
          fluential: 70,
        },
      ],
    },
  ];
  return (
    <MainContainer>
      <Grid container spacing={5}>
        {SkillSet.map(({ category, experience, icon, skills }) => (
          <Grid item xs={12} sm={6} key={category}>
            <SubSkills
              category={category}
              experience={experience}
              icon={icon}
              skills={skills}
            />
          </Grid>
        ))}
      </Grid>
    </MainContainer>
  );
}
