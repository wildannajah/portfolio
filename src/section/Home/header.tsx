import { Box, Checkbox, styled, Typography } from "@mui/material";
import { UilSun, UilMoon } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import typography from "../../theme/typography";
import { dispatch, useSelector } from "../../redux/store";
import { setTheme } from "../../redux/slice/theme";

const Navigation = styled("header")(({ theme }) => ({
  width: "100%",
  position: "fixed",
  height: "3rem",
  bottom: 0,
  left: 0,
  zIndex: 100,
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default function Header() {
  const { mode } = useSelector((state) => state.theme);
  const [darkMode, setdarkMode] = useState(mode === "dark");
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("themeMode", darkMode ? "dark" : "light");
      dispatch(setTheme(localStorage.getItem("themeMode")));
    }
  }, [darkMode]);
  return (
    <Navigation
      sx={{
        boxShadow: scroll ? "0 -1px 4px rgba(0, 0, 0, .15)" : "",
      }}
    >
      <Box>
        <Box
          sx={{
            maxWidth: "768px",
            marginX: "1.5rem",
            height: "3rem",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontWeight: typography.fontWeightMedium,
            }}
          >
            Wildan
          </Typography>
          <motion.div whileTap={{ rotate: 360 }}>
            <Checkbox
              checked={darkMode}
              icon={<UilSun />}
              checkedIcon={<UilMoon />}
              sx={{
                color: "text.primary",
                "&.Mui-checked": {
                  color: "text.primary",
                },
              }}
              onClick={() => setdarkMode(!darkMode)}
            />
          </motion.div>
        </Box>
      </Box>
    </Navigation>
  );
}
