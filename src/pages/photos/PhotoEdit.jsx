import { Edit, SimpleForm, TextInput } from 'react-admin';

const PhotoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" label="Título" />
            <TextInput source="url" label="URL de la imagen" />
        </SimpleForm>
    </Edit>
);

export default PhotoEdit;
