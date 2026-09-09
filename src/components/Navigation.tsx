import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import TranslateIcon from "@mui/icons-material/Translate";
import { useLanguage } from "../context/LanguageContext";
import { navTranslations } from "../translations/content";

const drawerWidth = 240;

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const { lang, toggleLang } = useLanguage();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navItems = navTranslations[lang];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon /> Menu
      </p>
      <Divider />
      <div style={{ padding: "12px 16px" }}>
        <Button
          variant="outlined"
          size="small"
          onClick={toggleLang}
          startIcon={<TranslateIcon />}
          sx={{
            borderRadius: "20px",
            borderColor: "#7b2cbf",
            color: mode === "dark" ? "#ffffff" : "#0d1116",
            textTransform: "initial",
            fontWeight: 700,
          }}
        >
          {lang === "es" ? "English (EN)" : "Español (ES)"}
        </Button>
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item.id)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar className="navigation-bar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {mode === "dark" ? (
              <LightModeIcon
                onClick={() => modeChange()}
                sx={{ cursor: "pointer" }}
                titleAccess={lang === "es" ? "Cambiar a modo claro" : "Switch to light mode"}
              />
            ) : (
              <DarkModeIcon
                onClick={() => modeChange()}
                sx={{ cursor: "pointer" }}
                titleAccess={lang === "es" ? "Cambiar a modo oscuro" : "Switch to dark mode"}
              />
            )}

            {/* Language Switcher Pill */}
            <button
              onClick={toggleLang}
              className="lang-switch-pill"
              title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(157, 78, 221, 0.15)",
                border: "1px solid rgba(157, 78, 221, 0.4)",
                color: mode === "dark" ? "#ffffff" : "#0d1116",
                borderRadius: "20px",
                padding: "4px 12px",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <TranslateIcon sx={{ fontSize: 16, color: "#9d4edd" }} />
              <span>{lang === "es" ? "ES" : "EN"}</span>
              <span style={{ opacity: 0.6, fontSize: "0.75rem" }}>
                | {lang === "es" ? "EN" : "ES"}
              </span>
            </button>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{ color: "#fff" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;