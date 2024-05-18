
import Loginstatus from "./Componets/Project2/Loginstatus";
import Home from "./Projects/Home/Home";
import Project6 from "./Projects/Project6/Project6";

import Project1 from "./Projects/Project1/Project1";
import DashboardP2 from "./Projects/Project2/DashboardP2";
import Login from "./Projects/Project2/Login";
import ShopCart from "./Projects/Project3/ShopCart";
import Project4 from "./Projects/Project4/Project4";
import Project5 from "./Projects/Project5/Project5";

import Checkout from "./Projects/Project7/Pages/Checkout/Checkout";
import Create from "./Projects/Project7/Pages/Create/Create";
import Project7 from "./Projects/Project7/Project7";
import Project8 from "./Projects/Project8/Project8";

export  const MyRoutes=[
    {path:"/" , element:<Home/>},
    {path:"project1" , element:<Project1/>},
    {path:"project2" , element:<Login/>},
    {path:"project3" , element:<ShopCart/>},
    {path:"project2/Dashboard" , element:<Loginstatus><DashboardP2/></Loginstatus>},
    {path:"project4" , element:<Project4/>},
    {path:"project5" , element:<Project5/>},
    {path:"Project6" , element:<Project6/>},

    {path:"Project6/:name" , element:<Project6/>},
    {path:"project7" , element:<Project7/>},
    {path:"project7/:id" , element:<Project7/>},
    {path:"project7/create" , element:<Create/>},
    {path:"project7/checkout" , element:<Checkout/>},
    {path:"project8" , element:<Project8/>},
]