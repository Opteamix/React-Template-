import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';

interface IconMapping {
  [key: string]: React.ElementType;
}

const icons: IconMapping = {
  Home: HomeIcon,
  Contact: ContactMailIcon,
};

export default icons;
