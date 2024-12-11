import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';
import { usePermissions } from 'react-admin';


const AlbumList = (props) => {
    const { permissions } = usePermissions(); // Obtener los permisos del usuario logueado

    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" label="ID" />
                <TextField source="title" label="Título" />
                {/* Mostrar los botones solo si el usuario es admin */}
                {permissions === 'admin' && (
                    <>
                        <EditButton />
                        <DeleteButton />
                    </>
                )}
            </Datagrid>
        </List>
    );
};

export default AlbumList;
