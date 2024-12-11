import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';
import { usePermissions } from 'react-admin';

const CommentList = (props) => {
    const { permissions } = usePermissions(); // Obtener los permisos del usuario logueado

    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" label="ID" />
                <TextField source="name" label="Nombre" />
                <TextField source="email" label="Correo" />
                <TextField source="body" label="Comentario" />
                {/* Condicionar la visibilidad de los botones de edición y eliminación */}
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

export default CommentList;
