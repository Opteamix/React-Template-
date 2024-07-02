import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArticleIcon from '@mui/icons-material/Article';

export interface Tabs {
    title: string;
    url: string;
    icon?: React.ElementType;
    submenu?: Tabs[];
}

export const TabsData: Tabs[] = [
    {
        title: "Templates",
        url: "/landing-page/templates",
        icon: ArticleIcon
    },
    {
        title: "Home",
        url: "",
        icon: HomeIcon,
        submenu: [
            {
                title: "Sample 1",
                url: "/landing-page/home/sample1",
            },
            {
                title: "Sample 2",
                url: "",
                submenu: [
                    {
                        title: "Sample Page 1",
                        url: "/landing-page/home/sample2/samplepage1",
                    },
                    {
                        title: "Sample Page 2",
                        url: "/landing-page/home/sample2/samplepage2",
                    },
                ],
            },
        ],
    },
    {
        title: "Contact",
        url: "/landing-page/contact",
        icon: ContactMailIcon
    },
];