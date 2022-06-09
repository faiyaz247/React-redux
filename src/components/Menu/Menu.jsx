import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function SimpleMenu({ menuItems, ids }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        color="primary"
        size="small"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
            menuItems && menuItems.length && menuItems.map(({ label, onClick }) => (
              <MenuItem
                onClick={() => {
                  onClick(ids);
                  handleClose();
                }}
              >
                {label}
              </MenuItem>
            ))
        }
      </Menu>
    </div>
  );
}
SimpleMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  ids: PropTypes.number.isRequired,
};
