import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import DomainIcon from '@mui/icons-material/Domain';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import DoorBackIcon from '@mui/icons-material/DoorBack';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import DrawIcon from '@mui/icons-material/Draw';

export const SidebarData = [
  {
    title: 'Templates',
    id: 'templates',
    path: '/landing-page/templates',
    icon: <ArticleIcon />
  },
  {
    title: 'Home',
    id: 'home',
    path: '/landing-page/home',
    icon: <HomeIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: 'Sample 1',
        id: 'home',
        path: '/landing-page/home/sample1',
        icon: <DocumentScannerIcon />
      },
      {
        title: 'Sample 2',
        id: 'home',
        path: '/landing-page/home/sample2',
        icon: <DomainIcon />,
        iconClosed: <ArrowDropDownIcon />,
        iconOpened: <ArrowDropUpIcon />,
    
        subNav: [
          {
            title: 'Sample Page 1',
            id: 'home',
            path: '/landing-page/home/sample2/samplepage1',
            icon: <DomainAddIcon />,
            cName: 'sub-nav'
          },
          {
            title: 'Sample Page 2',
            id: 'home',
            path: '/landing-page/home/sample2/samplepage2',
            icon: <DoorBackIcon />,
            cName: 'sub-nav',
            iconClosed: <ArrowDropDownIcon />,
            iconOpened: <ArrowDropUpIcon />,
            subNav: [
              {
                title: 'Nested Page 1',
                id: 'home',
                path: '/landing-page/home/sample2/samplepage2/nestedpage1',
                icon: <DownhillSkiingIcon />,
                cName: 'sub-nav'
              },
              {
                title: 'Nested Page 2',
                id: 'home',
                path: '/landing-page/home/sample2/samplepage2/nestedpage2',
                icon: <DrawIcon />,
                cName: 'sub-nav'
              }
            ]
          }
        ]
      },
    ]
  },
  {
    title: 'Contact',
    id: 'contact',
    path: '/landing-page/contact',
    icon: <ContactMailIcon />
  }
];

