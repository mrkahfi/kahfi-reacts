import { useState } from 'react';
import { Drawer, Box, List, ListItem, ListItemText, ListItemIcon, IconButton, Toolbar } from '@mui/material';
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
              backgroundColor: 'blue', 
              transition: 'width 0.3s', 
              overflowX: 'hidden',
            },
          }}
        >
          <Toolbar>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
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
                    transition: 'padding 0.3s', 
                    paddingLeft: isCollapsed ? '16px' : '24px', 
                    minWidth: 0, 
                    color: 'white',
                  }}
                >
                  <ListItemIcon sx={{ color: 'white' }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      visibility: isCollapsed ? 'hidden' : 'visible',
                      opacity: isCollapsed ? 0 : 1,
                      width: isCollapsed ? 0 : 'auto',
                      transition: 'visibility 0s linear 0.3s, opacity 0.3s, width 0.3s', 
                      color: 'white',
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
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
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
