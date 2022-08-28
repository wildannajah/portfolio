import { Grid } from "@mui/material";
import Iconify from "../../component/Iconify";
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
          name: "React Js",
          fluential: 45,
        },
        {
          name: "HTML Js",
          fluential: 45,
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
          fluential: 45,
        },
        {
          name: "Python",
          fluential: 45,
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
