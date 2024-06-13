// import React, { useContext } from 'react';
// import ThemeContext from './ThemeContext';

// const Header = () => {
//   const { theme, toggleTheme, currentUser, setCurrentUser } = useContext(ThemeContext);

//   const handleNameChange = () => {
//     setCurrentUser(prevUser => ({ ...prevUser, name: 'Your Name' }));
//   };

//   return (
//     <header style={{ background: theme === 'light' ? '#fff' : '#f48fb1', color: theme === 'light' ? '#f48fb1' : '#fff' }}>
//       <h1>Welcome, {currentUser.name}!</h1>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <button onClick={handleNameChange}>Change Name</button>
//     </header>
//   );
// }

// export default Header;

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { Layout } from 'antd';

const { Header } = Layout;

const CustomHeader = () => {
  const { theme, currentUser } = useContext(ThemeContext);

  return (
    <Header style={{ 
      background: theme === 'light' ? '#eee' : '#f48fb1', 
      color: theme === 'light' ? '#f48fb1' : '#fff', 
      fontSize: '0.5rem', 
      width: '100%',
      padding: '10px 20px' ,
      margin: 0
    }}>
      <h1 style={{ margin: 0 }}>Welcome, {currentUser.name}!</h1>
    </Header>
  );
}

export default CustomHeader;




