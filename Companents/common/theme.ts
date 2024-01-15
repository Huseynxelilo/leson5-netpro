import { createTheme } from "@mui/material";

const theme = createTheme({
    components:{
        MuiButton:{
          styleOverrides:{
           root:{
            borderRadius:0,
           }, 
          },  
        },
       MuiLink:{
        styleOverrides:{
          root:{
            textDecoration: 'none',
            display: "flex",
            alignItems: "center",
          }
        }
       }
    },
});

export default theme;