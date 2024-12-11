// src/pages/users/UserDelete.jsx
import { DeleteButton } from 'react-admin';

const UserDelete = (props) => {
    // Aquí puedes definir cómo manejar la eliminación del usuario
    return (
        <div>
            <DeleteButton {...props} />
        </div>
    );
};

export default UserDelete;
