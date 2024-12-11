import { Create, SimpleForm, TextInput } from 'react-admin';

const CommentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Nombre" />
            <TextInput source="email" label="Correo" />
            <TextInput source="body" label="Comentario" multiline />
        </SimpleForm>
    </Create>
);

export default CommentCreate;
