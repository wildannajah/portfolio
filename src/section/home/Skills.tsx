import { Grid } from "@mui/material";
import Iconify from "../../components/Iconify";
import { MainContainer } from "./Main";
import SubSkills, { SubSkillsProps } from "./SubSkills";

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
          name: "PostgreSQL",
          fluential: 70,
        },
        {
          name: "Python",
          fluential: 75,
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
