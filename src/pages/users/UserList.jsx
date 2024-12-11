
import { List, Datagrid, TextField,EmailField, EditButton, DeleteButton } from 'react-admin';
import { usePermissions } from 'react-admin';

const UserList = (props) => {
    const { permissions } = usePermissions(); // Obtener los permisos del usuario logueado

    return (
        <List {...props}>
            <Datagrid>
            <TextField source="id" label="ID" />
            <TextField source="name" label="Nombre" />
            <EmailField source="email" label="Correo" />
            <TextField source="address.street" label="Calle" />
            <TextField source="address.city" label="Ciudad" />
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

export default UserList;
