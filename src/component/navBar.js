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
import { useState, useEffect } from 'react';

const Search = styled('div')(({ theme }) => ({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius + 20,
  backgroundColor: 'rgba(229, 229, 229, 1)',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(1),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'rgba(0, 0, 0, 0.87)',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    transition: theme.transitions.create('width'),
    width: '12ch',
    '&:focus': {
      width: '20ch',
    },
  },
}));

export default function SearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [genre, setGenre] = useState('');
  const [records, setRecords] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.innerText) 
    setGenre(selectedGenre);
    handleClose();
  };

  useEffect(() => {
    if (genre) {
      fetch(`${process.env.NEXT_PUBLIC_APP_PATH}/movies/genre/${genre}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setRecords(data);
        })
        .catch((err) => console.log('Fetch error:', err));
    }
  }, [genre]);
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: '#ffffff', width: '100%' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              color: 'rgba(65, 140, 251, 1)',
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
            component="a"
            href="/"
            sx={{
              color: 'rgba(0, 0, 0, 0.87)',
              marginRight: 4,
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>
          <Button
            aria-controls="genre-menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{
              color: 'rgba(0, 0, 0, 0.87)',
              textTransform: 'none',
              marginRight: 4,
            }}
          >
            Genre <ArrowDropDownIcon />
          </Button>
          <Menu
            id="genre-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            
            <MenuItem onClick={handleGenreChange}>Action</MenuItem>
            <MenuItem onClick={handleGenreChange}>Comedy</MenuItem>
            <MenuItem onClick={handleGenreChange}>Drama</MenuItem>
            <MenuItem onClick={handleGenreChange}>Thriller</MenuItem>
            
          </Menu>
          <Search>
            <SearchIcon />
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 2 }}>
        {
          records.map((movie) => (
            <Typography key={movie.id} variant="body1">
              {movie.title}
            </Typography>
          ))
        }
      </Box>
    </Box>
  );
}
