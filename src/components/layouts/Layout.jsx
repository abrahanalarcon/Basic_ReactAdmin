// src/components/Layout.jsx

import { Layout } from "react-admin";
import CustomMenu from "./CustomMenu";
import MyMenu from "./MyMenu";

const CustomLayout = (props) => <Layout {...props} menu={MyMenu} />;

export default CustomLayout;

