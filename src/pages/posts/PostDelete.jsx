// Dentro de tu archivo de recursos (por ejemplo, src/pages/posts/PostDelete.jsx)


import { DeleteButton } from 'react-admin';

const PostDelete = (props) => {
    // Aquí puedes definir cómo manejar la eliminación
    return (
        <DeleteButton {...props} />
    );
};

export default PostDelete;
