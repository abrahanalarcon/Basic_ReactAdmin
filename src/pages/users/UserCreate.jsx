import { Create, SimpleForm, TextInput } from 'react-admin';

const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Nombre" />
            <TextInput source="email" label="Correo" />
            <TextInput source="address.street" label="Calle" />
            <TextInput source="address.city" label="Ciudad" />
        </SimpleForm>
    </Create>
);

export default UserCreate;

