import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box, CssBaseline, Icon, IconButton, List, ListItem, Switch, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";

const midLinks =[
    {title:"catalogue",path:"/catalogue"},
    {title:"about",path:"/about"},
    {title:"contact",path:"/contact"},
]
const rightLinks =[
    {title:"login",path:"/login"},
    {title:"register",path:"/register"},
]

const navCss=[
    {
        color:"inherit",typography:"h6",
        '&:hover':{
            color:"grey.500"
        },
        '&.active':{
            color:"text.primary"
        },textDecoration:"none"
    }

]
interface Props{
    darkMode:boolean;
    handleThemeChange:()=>void;
}

export default function Header({darkMode,handleThemeChange}:Props){
return (
    <>
    <CssBaseline />
    <AppBar position="static" sx={{mb:4}}>
        <Toolbar sx={{display:"flex",justifyContent:"space-between",textAlign:"center"}}>
            <Box display="flex" alignItems="center">
            <Typography variant="h6" component={NavLink} to="/" sx={navCss}>RE-STORE</Typography>
            <Switch checked={darkMode} onChange={handleThemeChange}  />
            </Box>

            <List sx={{display:'flex'}}>
                {
                    midLinks.map(({title,path})=>(
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navCss}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))
                }
            </List>
            <Box display="flex" alignItems="center">

            <IconButton size="large" edge="start" sx={{marginRight:2,color:"inherit"}}>
                <Badge badgeContent="4" color="secondary"><ShoppingCart /> </Badge>

            </IconButton>
            <List sx={{display:'flex'}}>
                {
                    rightLinks.map(({title,path})=>(
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navCss}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))
                }
            </List>
            </Box>

        </Toolbar>
    </AppBar>
    </>
)

}


