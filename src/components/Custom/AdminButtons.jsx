import { EditButton, DeleteButton } from 'react-admin';
import { usePermissions } from 'react-admin';

const AdminButtons = () => {
    const { permissions } = usePermissions(); // Obtener los permisos del usuario logueado

    // Renderizar los botones solo si el usuario es admin
    if (permissions === 'admin') {
        return (
            <>
                <EditButton />
                <DeleteButton />
            </>
        );
    }
    return null; // No renderizar nada si no es admin
};

export default AdminButtons;
