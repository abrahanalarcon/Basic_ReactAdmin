// src/pages/album/AlbumDelete.jsx

import { DeleteButton } from 'react-admin';

const AlbumDelete = (props) => {
    // Aquí puedes definir cómo manejar la eliminación del álbum
    return (
        <DeleteButton {...props} />
    );
};

export default AlbumDelete;
