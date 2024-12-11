// src/pages/comments/CommentDelete.jsx


import { DeleteButton } from 'react-admin';

const CommentDelete = (props) => {
    // Aquí puedes definir cómo manejar la eliminación del comentario
    return (
        <DeleteButton {...props} />
    );
};

export default CommentDelete;
