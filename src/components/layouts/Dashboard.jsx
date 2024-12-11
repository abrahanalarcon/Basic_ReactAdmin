import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useDataProvider } from 'react-admin';
import UserAlbumPieChart from '../custom/UserAlbumPieChart';

const Dashboard = () => {
    const dataProvider = useDataProvider();

    const [userCount, setUserCount] = React.useState(0);
    const [albumCount, setAlbumCount] = React.useState(0);
    const [photoCount, setPhotoCount] = React.useState(0);
    const [postCount, setPostCount] = React.useState(0);

    React.useEffect(() => {
        // Obtener cantidad de usuarios
        dataProvider.getList('users', { pagination: { page: 1, perPage: 1 }, sort: {}, filter: {} })
            .then(response => setUserCount(response.total))
            .catch(error => console.error(error));

        // Obtener cantidad de álbumes
        dataProvider.getList('albums', { pagination: { page: 1, perPage: 1 }, sort: {}, filter: {} })
            .then(response => setAlbumCount(response.total))
            .catch(error => console.error(error));

        // Obtener cantidad de fotos
        dataProvider.getList('photos', { pagination: { page: 1, perPage: 1 }, sort: {}, filter: {} })
            .then(response => setPhotoCount(response.total))
            .catch(error => console.error(error));

        // Obtener cantidad de publicaciones
        dataProvider.getList('posts', { pagination: { page: 1, perPage: 1 }, sort: {}, filter: {} })
            .then(response => setPostCount(response.total))
            .catch(error => console.error(error));
    }, [dataProvider]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
                <Card style={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h5">Usuarios Totales</Typography>
                        <Typography variant="h2">{userCount}</Typography>
                    </CardContent>
                </Card>
                <Card style={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h5">Álbumes Totales</Typography>
                        <Typography variant="h2">{albumCount}</Typography>
                    </CardContent>
                </Card>
                <Card style={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h5">Fotos Totales</Typography>
                        <Typography variant="h2">{photoCount}</Typography>
                    </CardContent>
                </Card>
                <Card style={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h5">Publicaciones Totales</Typography>
                        <Typography variant="h2">{postCount}</Typography>
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardContent>
                    <Typography variant="h5">Distribución General</Typography>
                    <UserAlbumPieChart 
                        userCount={userCount} 
                        albumCount={albumCount} 
                        photoCount={photoCount} 
                        postCount={postCount} 
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;
