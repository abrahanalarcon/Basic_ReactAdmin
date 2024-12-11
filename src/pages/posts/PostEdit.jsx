import { Edit, SimpleForm, TextInput } from 'react-admin';

const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" label="ID" />
            <TextInput source="title" label="Título" />
            <TextInput multiline source="body" label="Contenido" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;
