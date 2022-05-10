import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
   zIndex: 100,
   boxShadow: "0px -1px 5px 0px rgba(0,0,0,0.5)",
   marginLeft: "-0.5rem",
  },
});
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function SimpleBottomNavigation({cartItems}) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
 if(value === 0) {
   navigate('/');
 } else if(value === 1) {
    navigate('/');
 } else if(value === 2) {
    navigate('/checkout');
 } else if(value === 3) {
    navigate('/');
 }

  },[value,history])
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <BottomNavigationAction label="" icon={<HomeIcon />} />
      <BottomNavigationAction label="" icon={<SearchIcon />} />
      <BottomNavigationAction label="" icon={
        <StyledBadge badgeContent={cartItems.length} color="primary">
          <ShoppingCartIcon />
        </StyledBadge>
      } />
      <BottomNavigationAction label="" icon={<MoreHorizIcon />} />
    </BottomNavigation>
  );
}
