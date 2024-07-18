import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  marginLeft: 'auto', // Moves search bar to the right end
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius + 20,
  backgroundColor: 'rgba(229, 229, 229, 1)', // Light grey color
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(1),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'rgba(0, 0, 0, 0.87)', // Darker text color for better visibility
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    transition: theme.transitions.create('width'),
    width: '12ch',
    '&:focus': {
      width: '20ch',
    },
  },
}));

export default function SearchAppBar({handleGenreChange}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#ffffff' , width:"97%"}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            // component={Link}
            // to="/http://localhost:3001/"
            sx={{
              color: 'rgba(65, 140, 251, 1)', // Blue color
              fontFamily: 'Rubik',
              fontSize: '26.76px',
              fontWeight: 700,
              lineHeight: '31.72px',
              textAlign: 'left',
              textDecoration: 'none',
              marginRight: 4,
            }}
          >
            MMDB
          </Typography>
          <Typography
            variant="body1"
            noWrap
            // component={Link}
            // to="/http://localhost:3001/"
            sx={{ color: 'rgba(0, 0, 0, 0.87)', marginRight: 4, textDecoration: 'none' }}
          >
            Home
          </Typography>
          <Button
            aria-controls="genre-menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ color: 'rgba(0, 0, 0, 0.87)', textTransform: 'none', marginRight: 4 }}
          >
            Genre <ArrowDropDownIcon />
          </Button>
          <Menu
            id="genre-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onChange={handleGenreChange}
            onClose={handleClose}

          >
            <MenuItem value="Action">Action</MenuItem>
            <MenuItem value="Comedy">Comedy</MenuItem>
            <MenuItem value="Drama">Drama</MenuItem>
            <MenuItem value="Thriller">Thriller</MenuItem>
          </Menu>
          <Search>
            <SearchIcon />
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
