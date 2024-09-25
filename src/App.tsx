import { useState } from 'react';
import { Drawer, Box, List, ListItem, ListItemText, ListItemIcon, IconButton, Toolbar, useTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

const collapsedWidth = 60;
const expandedWidth = 240;

function App() {
  const theme = useTheme(); // Access the theme object
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDrawer = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          variant="permanent"
          sx={{
            width: isCollapsed ? collapsedWidth : expandedWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: isCollapsed ? collapsedWidth : expandedWidth,
              boxSizing: 'border-box',
              backgroundColor: theme.palette.primary.main, // Use theme color
              transition: theme.transitions.create('width', { duration: theme.transitions.duration.standard }),
              overflowX: 'hidden',
            },
          }}
        >
          <Toolbar sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon sx={{ color: theme.palette.common.white }} />
            </IconButton>
          </Toolbar>
          <Box sx={{ overflowY: 'auto', overflowX: 'hidden' }}>
            <List>
              {[
                { text: 'Wallet', icon: <AccountBalanceWalletIcon /> },
                { text: 'Transaction', icon: <MonetizationOnIcon /> },
                { text: 'Receipt', icon: <ReceiptIcon /> },
                { text: 'Phone', icon: <PhoneIcon /> },
                { text: 'Person', icon: <PersonIcon /> },
              ].map(({ text, icon }) => (
                <ListItem
                  key={text}
                  component={Link}
                  to={`/${text.toLowerCase().replace(/\s+/g, '')}`}
                  sx={{
                    whiteSpace: 'nowrap',
                    transition: theme.transitions.create('padding', { duration: theme.transitions.duration.standard }),
                    paddingLeft: isCollapsed ? theme.spacing(2) : theme.spacing(3), // Use theme spacing
                    minWidth: 0,
                    color: theme.palette.common.white, // Use theme color
                  }}
                >
                  <ListItemIcon sx={{ color: theme.palette.common.white }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      visibility: isCollapsed ? 'hidden' : 'visible',
                      opacity: isCollapsed ? 0 : 1,
                      width: isCollapsed ? 0 : 'auto',
                      transition: theme.transitions.create(['visibility', 'opacity', 'width'], {
                        duration: theme.transitions.duration.standard,
                        easing: theme.transitions.easing.sharp,
                      }),
                      color: theme.palette.common.white, // Use theme color
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Main content area */}
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: theme.palette.background.default, p: theme.spacing(3) }} // Use theme for background and padding
        >
          <Toolbar />
          <Routes>
            <Route path="/wallet" element={<h1>Wallet Content</h1>} />
            <Route path="/transaction" element={<h1>Transaction Content</h1>} />
            <Route path="/receipt" element={<h1>Receipt Content</h1>} />
            <Route path="/phone" element={<h1>Phone Content</h1>} />
            <Route path="/person" element={<h1>Person Content</h1>} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
