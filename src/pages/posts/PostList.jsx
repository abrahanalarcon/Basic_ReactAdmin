
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';
import { usePermissions } from 'react-admin';

const PostList = (props) => {
    const { permissions } = usePermissions(); // Llamar a usePermissions antes de retornar el JSX

    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" label="ID" />
                <TextField source="title" label="Título" />
                <TextField source="body" label="Contenido" />
                {permissions === 'admin' && ( // Verificar permisos para mostrar botones
                    <>
                        <EditButton />
                        <DeleteButton />
                    </>
                )}
            </Datagrid>
        </List>
    );
};

export default PostList;
