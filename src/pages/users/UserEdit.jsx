import { Edit, SimpleForm, TextInput } from 'react-admin';

const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" label="Nombre" />
            <TextInput source="email" label="Correo" />
            <TextInput source="address.street" label="Calle" />
            <TextInput source="address.city" label="Ciudad" />
        </SimpleForm>
    </Edit>
);

export default UserEdit;
