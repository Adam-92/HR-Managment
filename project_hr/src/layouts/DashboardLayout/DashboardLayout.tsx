import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { AvatarMenu } from './AvatarMenu/AvatarMenu';
import { sidebarTabs } from './SidebarTabs/sidebarTabs';
import { LanguageMenu } from './LangugaeMenu/LanguageMenu';
import { Tab } from './SidebarTabs/Tab/Tab';
import { CollapseTab } from './SidebarTabs/CollapseTab/CollapseTab';
import { theme } from './theme';

export const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {sidebarTabs.map((tab) =>
          tab.link ? (
            <Tab tab={tab} key={tab.name} />
          ) : (
            <CollapseTab tabs={tab.children} key={tab.name} />
          ),
        )}
      </List>
      <Divider />
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <IconButton aria-label="open drawer" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              HR JOBS
            </Typography>
            <Box
              sx={{
                background: 'white',
                width: '4.5rem',
                height: '5vh',
                marginLeft: '3.5rem',
                borderRadius: '2rem',
              }}
            >
              <LanguageMenu />
            </Box>
            <AvatarMenu />
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: 240 }, flexShrink: { sm: 0 }, zIndex: 1 }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 240,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 240,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${240}px)` },
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
