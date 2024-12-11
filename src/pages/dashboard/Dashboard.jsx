import  { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const Dashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const dataProvider = useDataProvider();

    useEffect(() => {
        // Obtener el total de usuarios de la API
        dataProvider.getList('users', { pagination: { page: 1, perPage: 1 } })
            .then(response => setUserCount(response.total))
            .catch(error => console.error("Error fetching data: ", error));
    }, [dataProvider]);

    return (
        <div>
            <Typography variant="h4" gutterBottom>Dashboard</Typography>
            <Grid container spacing={3}>
                {/* Card para número total de usuarios */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Usuarios Totales</Typography>
                            <Typography variant="h4">{userCount}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Card para Accesos rápidos */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Accesos Rápidos</Typography>
                            <Button variant="contained" color="primary" href="/#/users/create">
                                Crear Usuario
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Card para últimos usuarios */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Últimos Usuarios</Typography>
                            {/* Aquí podrías mostrar los últimos usuarios con un listado */}
                            <Typography variant="body1">Usuario 1</Typography>
                            <Typography variant="body1">Usuario 2</Typography>
                            <Typography variant="body1">Usuario 3</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
