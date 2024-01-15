import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

interface ILinks {
  id: number;
  title?: string;
  icon: any;
}
export const navLink:ILinks[] =[
    {
      id:0,title: "Fezail Bayramov kuc., 1156, Xetai ray., Baki, Azerbaycan, AZ1025",
      icon:<LocationOnIcon/>  
    },
    {
    id:1,
     title:"+9944595754080 / +994505754070",
    icon:<WhatsAppIcon/>  
    },

    {
    id:2,
    title: "info@netprogroup.az",
    icon:<EmailIcon/>  
    },
  ];


  export const icon:ILinks[] = [
    {
      id:0,
      icon:<LocationOnIcon/>  
    },
    {
    id:1,
    icon:<WhatsAppIcon/>  
    },

    {
    id:2,
    icon:<EmailIcon/>  
    },
  ]

