import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const items = [
        { label: 'Home', key: 'Home' }, 
        { label: 'About', key: 'About' }, 
        {
          label: 'sub menu',
          key: 'submenu',
          children: [{ label: 'item', key: 'submenu-Home' }],
          children: [{ label: 'item 2', key: 'submenu-Home' }],
          children: [{ label: 'item 3', key: 'submenu-Home' }],
        },
      ];
      return <Menu items={items} />;
  
};

export default Navbar;
