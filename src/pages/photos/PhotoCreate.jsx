import { Create, SimpleForm, TextInput } from 'react-admin';

const PhotoCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" label="Título" />
            <TextInput source="url" label="URL de la imagen" />
        </SimpleForm>
    </Create>
);

export default PhotoCreate;
