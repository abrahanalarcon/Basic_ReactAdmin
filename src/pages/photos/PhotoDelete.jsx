// src/pages/photos/PhotoDelete.jsx


import { DeleteButton } from 'react-admin';

const PhotoDelete = (props) => {
    // Aquí puedes definir cómo manejar la eliminación de la foto
    return (
        <DeleteButton {...props} />
    );
};

export default PhotoDelete;
