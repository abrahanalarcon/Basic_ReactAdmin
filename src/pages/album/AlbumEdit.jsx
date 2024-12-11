import { Edit, SimpleForm, TextInput } from 'react-admin';

const AlbumEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" label="Título" />
        </SimpleForm>
    </Edit>
);

export default AlbumEdit;
