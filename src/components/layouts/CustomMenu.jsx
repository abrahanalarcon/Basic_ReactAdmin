
import { useRedirect, useResourceDefinitions } from 'react-admin';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import ImageIcon from '@mui/icons-material/Image';
import PostAddIcon from '@mui/icons-material/PostAdd';

const CustomMenu = () => {
    const navigate = useRedirect();
    const resources = useResourceDefinitions(); // Obtén todas las definiciones de recursos

    const resourceIcons = {
        users: <PeopleIcon />,
        albums: <PhotoAlbumIcon />,
        photos: <ImageIcon />,
        posts: <PostAddIcon />,
    };
    
    return (
        <List
        className='border border-gray-300'
        >
            {/* Enlace al Dashboard */}
            <ListItem
              button 
              onClick={() => navigate('/')}
              className="menu-item w-full px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer border border-gray-300"
                >
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>

            {/* Enlace dinámico para cada recurso */}
            {Object.keys(resources).map((resource) => (
                <ListItem 
                   button 
                   key={resource} 
                   onClick={() => navigate(`/${resource}`)}
                   className=" border border-gray-300 menu-item w-full px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
                   >
                    <ListItemIcon>
                        {resourceIcons[resource] || <HomeIcon />} {/* Usa un ícono por defecto si no hay ícono */}
                    </ListItemIcon>
                    <ListItemText primary={resources[resource].options?.label || resource} />
                </ListItem>
            ))}
        </List>
    );
};

export default CustomMenu;
