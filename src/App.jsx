import { Admin,  Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './components/layouts/Dashboard';
import { UserList, UserEdit, UserCreate } from './pages/users';
import { CommentList, CommentEdit, CommentCreate } from './pages/comments';

import { PostList, PostEdit, PostCreate,  } from './pages/posts';
import { AlbumList, AlbumEdit, AlbumCreate } from './pages/album';
import { PhotoList, PhotoEdit, PhotoCreate } from './pages/photos';
import authProvider from './auth/authProvider';  // Importa el authProvider
import Layout from'./components/layouts/Layout';
import MyMenu from './components/layouts/MyMenu';
import Login from "./pages/Login";
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');




const App = () => {
    // const permissions = authProvider.getPermissions();

    return (
        <Admin layout={Layout} dashboard={Dashboard}  dataProvider={dataProvider} authProvider={authProvider}  menu={MyMenu} loginPage={Login}>
            <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}  />
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
            <Resource name="comments" list={CommentList} edit={CommentEdit}  create={CommentCreate} />
            <Resource name="photos" list={PhotoList} edit={PhotoEdit} create={PhotoCreate} />
            <Resource name="albums" list={AlbumList} edit={AlbumEdit} create={AlbumCreate} />
        </Admin>
    );
};

export default App;
