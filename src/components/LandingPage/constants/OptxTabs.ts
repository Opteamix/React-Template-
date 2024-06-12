import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArticleIcon from '@mui/icons-material/Article';

interface Tabs {
    label: string;
    submenu: string[];
    icon: React.ElementType;
    
} 
export const TopMenuTabs: Tabs[] = [
    {
        label: 'Templates',
        submenu: [],
        icon: ArticleIcon
    },
    {
        label: 'Home',
        submenu: ['Sample 1', 'Sample 2'],
        icon: HomeIcon
    },
    {
        label: 'Contact',
        submenu: [],
        icon: ContactMailIcon
    },
]