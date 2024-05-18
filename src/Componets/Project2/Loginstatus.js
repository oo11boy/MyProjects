import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetDataUser } from '../../ContextApi/P2Context/GetDataUser'

export default function Loginstatus({ children }) {
    const navigate = useNavigate(); // useNavigate را در سطح بالاتر قرار دهید

    useEffect(() => {
        const isLogin = localStorage.getItem('islogin');
        if (!isLogin) {
            navigate("../project2"); // از navigate استفاده کنید
        }
    }, []);

    // اگر کاربر وارد شده باشد، children را برگردانید
    return localStorage.getItem('islogin') ? children : null;
}
