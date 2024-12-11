
import { Menu } from 'react-admin';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CommentIcon from '@mui/icons-material/Comment';
import PhotoIcon from '@mui/icons-material/Photo';
import AlbumIcon from '@mui/icons-material/Album';

const MyMenu = () => (
    <Menu>
       <div className="mb-5 text-center">
      <img
        src="https://www.dgjp.gob.do/wp-content/uploads/2022/04/logo-dgjp.png"
        alt="Logo"
        className="w-full max-w-[150px] mx-auto"
      />
    </div>
        <Menu.Item 
             to="/" 
             primaryText="Inicio" 
             leftIcon={<DashboardIcon />} 
             
             
             
          />
        <Menu.Item 
            to="/users" 
            primaryText="Usuarios" 
            leftIcon={<PeopleIcon />} 
           
          
        />
        <Menu.Item 
            to="/posts" 
            primaryText="Publicaciones" 
            leftIcon={<PostAddIcon />} 
            
        />
        <Menu.Item 
            to="/comments" 
            primaryText="Comentarios" 
            leftIcon={<CommentIcon />} 
           
        />
        <Menu.Item 
            to="/photos" 
            primaryText="Fotos" 
            leftIcon={<PhotoIcon />}
            
        />
        <Menu.Item 
            to="/albums" 
            primaryText="Álbumes" 
            leftIcon={<AlbumIcon />} 
          
        />
        
    </Menu>
);

export default MyMenu;



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu } from "react-admin";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import SettingsIcon from "@mui/icons-material/Settings";
// import ReportIcon from "@mui/icons-material/Assessment";
// import { useTheme } from "@mui/material/styles";

// const MyMenu = () => {
//   const theme = useTheme();
//   const isDarkMode = theme.palette.mode === "dark";
//   const [isCollapsed, setIsCollapsed] = useState(false); // Controla si se muestran solo los íconos
//   const [activeOption, setActiveOption] = useState(null); // Controla el submenú activo

//   const toggleCollapse = () => setIsCollapsed(!isCollapsed);

//   const toggleSubmenu = (option) => {
//     setActiveOption(activeOption === option ? null : option);
//   };

//   // Datos del menú con íconos
//   const menuData = [
//     {
//       title: "Servicio al cliente",
//       icon: <DashboardIcon />,
//       suboptions: [
//         { title: "Solicitud Pension", link: "/doctores" },
//         { title: "Consulta de Solitud", link: "/" },
//         { title: "Registro de Certificacion", link: "/doctores" },
//         { title: "Consulta de Certificacion", link: "/" },
//         { title: "Solicitud de Carta", link: "/doctores" },
//         { title: "Cuadre por Usuario", link: "/" },
//         { title: "Cuadre por General", link: "/doctores" },
//         { title: "Remision de Expediente", link: "/" },
//       ],
//     },
//     {
//       title: "Cuentas Individuales",
//       icon: <PeopleIcon />,
//       suboptions: [
//         { title: "Recepción", link: "/subopcion2-1" },
//         { title: "Cuentas Electronicas", link: "/subopcion2-1" },
//         { title: "Pendiente de Compilacion", link: "/subopcion2-1" },
//         { title: "Proceso de Calulo", link: "/subopcion2-1" },
//         { title: "Remision Expediente", link: "/subopcion2-1" },
//         { title: "Compilacion", link: "/subopcion2-1" },
//       ],
//     },
//     {
//       title: "Reverificación",
//       icon: <ReportIcon />,
//       suboptions: [
//         { title: "Recepcion", link: "/subopcion3-1" },
//         { title: "Proceso", link: "/subopcion3-2" },
//         { title: "Archivo", link: "/subopcion3-3" },
//         { title: "Unidad Exp Incompleto", link: "/subopcion3-3" },
//         { title: "Remision Expedientes", link: "/subopcion3-3" },
//       ],
//     },
//     {
//       title: "Control de Calidad",
//       icon: <SettingsIcon />,
//       suboptions: [
//         { title: "Recepcion", link: "/subopcion3-1" },
//         { title: "Revision de Cuentas", link: "/subopcion3-2" },
//         { title: "Correcion de Calculos", link: "/subopcion3-3" },
//         { title: "Registros de Datos", link: "/subopcion3-3" },
//         { title: "Remision Expedinetes", link: "/subopcion3-3" },
//       ],
//     },
//   ];

//   return (
//     <aside 
   
//     className={`transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"} bg-white border border-gray-300 rounded-2xl shadow-md`}>
//       {/* Logo */}
//       <div className="p-4 flex items-center justify-between">
//         {!isCollapsed && (
//           <img
//             src="https://www.dgjp.gob.do/wp-content/uploads/2022/04/logo-dgjp.png"
//             alt="Consultas Pacientes"
//             className="w-36 h-auto"
//           />
//         )}
//         <button
//           onClick={toggleCollapse}
//           className="text-gray-700 hover:text-gray-900 focus:outline-none"
//         >
//           {isCollapsed ? "⇐" : "⇒"}
//         </button>
//       </div>

//       {/* Menú */}
//       <Menu className="mt-4">
//         {menuData.map((menu, index) => (
//           <div key={index}>
//             <button
//               onClick={() => toggleSubmenu(`opcion${index + 1}`)}
//               className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
//             >
//               {menu.icon}
//               {!isCollapsed && <span className="ml-4">{menu.title}</span>}
//             </button>

//             {/* Submenús */}
//             {!isCollapsed &&
//               activeOption === `opcion${index + 1}` &&
//               menu.suboptions.map((suboption, subIndex) => (
//                 <Link
//                   to={suboption.link}
//                   key={subIndex}
//                   className="block ml-8 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg"
//                 >
//                   {suboption.title}
//                 </Link>
//               ))}
//           </div>
//         ))}
//       </Menu>
//     </aside>
//   );
// };

// export default MyMenu;




