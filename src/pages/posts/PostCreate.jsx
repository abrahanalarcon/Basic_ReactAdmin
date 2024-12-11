import { Create, SimpleForm, TextInput } from 'react-admin';

const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" label="Título" />
            <TextInput multiline source="body" label="Contenido" />
        </SimpleForm>
    </Create>
);

export default PostCreate;
