// sidebarData.jsx
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Info'; 
import AddIcon from '@mui/icons-material/Add'; 

export const SidebarData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <AboutIcon/>,
        text: "About",
        link: "/about" 
    },
    {
        id: 2,
        icon: <AddIcon/>,
        text: "Add Product",
        link: "/AddProduct" 
    }
];