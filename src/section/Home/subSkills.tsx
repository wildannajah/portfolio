import { Box, Collapse, Stack, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import Iconify from "../../components/iconify";
import typography from "../../theme/typography";

export interface SubSkillsProps {
  category: string;
  experience: string;
  icon: ReactNode;
  skills: {
    name: string;
    fluential: number;
  }[];
}

export default function SubSkills({
  category,
  experience,
  icon,
  skills,
}: SubSkillsProps) {
  const [open, setOpen] = useState(false);
  return (
    <Stack
      onClick={() => setOpen(!open)}
      sx={{
        cursor: "pointer",
        transition: "10s",
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
    </Stack>
  );
}
