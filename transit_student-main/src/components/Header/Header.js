import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box , createTheme} from '@mui/material';
import Autocomplete from "react-google-autocomplete";
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ onPlaceChanged, onLoad }) => {

    const theme = createTheme({
        breakpoints: {
          values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
          },
        },
      });

  return (
    <AppBar position="static">
        <Toolbar sx={{
             display: 'flex', justifyContent: 'space-between',
        }}>
        <Typography variant="h5" sx={{
             display: 'none',
        }}>
            Travel Advisor
        </Typography>
        <Box display="flex">
            <Typography variant="h6" sx={{
             display: 'none',
             }}>
            Explore new places
            </Typography>
            {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div sx={{
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: "#63FFRR",
                '&:hover': { backgroundColor: "#B3FFRR" },
                marginRight: theme.spacing(2),
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
            }}>
                <div
                    sx={{
                        padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                >
                <SearchIcon />
                </div>
                <InputBase placeholder="Search…" sx={{      color: 'inherit',   padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
                }} />
            </div>
            </Autocomplete> */}
        </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header