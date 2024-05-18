import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GetDataUser = createContext({
  loginkychandler: () => {},
  errorloginmsg: () => {},
  islogin: () => {},
  userlogininfo: () => {},
  logoutuser:()=>{}
});

export const GetDataUserProvider = ({ children }) => {

  const [usersdata, setusersdata] = useState([]);
  const [islogin, setislogin] = useState(false);
  const [errorloginmsg, seterrormsg] = useState("");
  const [userlogininfo, setuserlogininfo] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          "https://freelancerkarapi.unicodewebdesign.com/api.php/users?api_key=A4AZr4YF9XB80SDFQVuMgOuwxJeBvFLANdUxbNFYd1Tyh4ZHY0"
        );
        setusersdata(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, []);

  const navi = useNavigate();

  const loginkychandler = (email, password, e) => {
    e.preventDefault();
    const finduser = usersdata.find(
      (item) => item.email === email && item.password === password
    );
    if (finduser) {
      setislogin(true);
      setuserlogininfo(finduser);
      seterrormsg("");
      localStorage.setItem('userlogininfo',JSON.stringify(finduser))
      localStorage.setItem('islogin',true)

      navi("../project2/Dashboard");
      
    } else {
      seterrormsg("اطلاعات وارد شده صحیح نمی باشد.");
    }
  };


  const logoutuser=(e)=>{
    e.preventDefault()
    localStorage.removeItem('islogin')
    localStorage.removeItem('userlogininfo')
    setislogin(false)
    navi("../project2");
  }

  const val = {
    loginkychandler,
    errorloginmsg,
    islogin,
    userlogininfo,
    logoutuser
  };

  return <GetDataUser.Provider value={val}>{children}</GetDataUser.Provider>;
};
