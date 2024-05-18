import React, { createContext, useState } from "react";

export const SocialPostContext = createContext({
    setpostsuser:()=>{},
    postsuser:()=>{},
    setdarkmode:()=>{},
    darkmode:()=>{},
    itempost:()=>{},
    setitempost:()=>{},
    open:()=>{},
    setOpen:()=>{},
    mystories:()=>{},
    setmystories:()=>{},
    setsavelist:()=>{},
    savelist:()=>{}
});

export const SocialPostContextProvider = (props) => {
    const { children } = props;
    const  [itempost,setitempost]=useState('')
    const [postsuser, setpostsuser] = useState([]);
    const [darkmode,setdarkmode]=useState(false)
    const [open,setOpen]=useState(false)
    const [savelist,setsavelist]=useState([])
 const [mystories,setmystories]=useState('')
    const Value = {
        setpostsuser,
        postsuser,
        darkmode,
        setdarkmode,
        itempost,
        setitempost,
        open,
        setOpen,
        mystories,
        setmystories,
        setsavelist,
        savelist
    };
 
    return (
        <SocialPostContext.Provider value={Value}>
            {children}
        </SocialPostContext.Provider>
    );
};


export default SocialPostContextProvider