import { Create, SimpleForm, TextInput } from 'react-admin';

const AlbumCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" label="Título" />
        </SimpleForm>
    </Create>
);

export default AlbumCreate;
