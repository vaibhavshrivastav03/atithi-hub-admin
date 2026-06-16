import {
 Box,
} from "@mui/material";

import AdminSidebar from "../components/sidebar/AdminSidebar";
import AdminNavbar from "../components/navbar/AdminNavbar";

export default function AdminLayout({
 children,
}: {
 children: React.ReactNode;
}) {

 const token =
   localStorage.getItem(
     "admin_token"
   );

 if (!token) {
   window.location.href = "/";
   return null;
 }

 return (
   <Box
     sx={{
       display: "flex",
       minHeight: "100vh",
     }}
   >
     <AdminSidebar />

     <Box
       sx={{
         flex: 1,
         background:
           "#F7F1EA",
       }}
     >
       <AdminNavbar />

       <Box p={3}>
         {children}
       </Box>
     </Box>
   </Box>
 );
}