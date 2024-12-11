import { Edit, SimpleForm, TextInput } from 'react-admin';

const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" label="ID" />
            <TextInput source="name" label="Nombre" />
            <TextInput source="email" label="Correo" />
            <TextInput source="body" label="Comentario" multiline />
        </SimpleForm>
    </Edit>
);

export default CommentEdit;
