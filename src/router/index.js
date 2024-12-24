import { SET_AXIOS_PROMISE_CANCEL } from "../store/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate} from "react-router";

const ProtectRoute = ({children}) => {
    const token = useSelector((state) => state.app.token);
    const axiosPromiseCancel = useSelector((state) => state.app.axiosPromiseCancel);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
            if(axiosPromiseCancel.length){
                axiosPromiseCancel.forEach((cancel) => cancel && cancel());
                dispatch(SET_AXIOS_PROMISE_CANCEL([]));
            }
        }, [axiosPromiseCancel, dispatch])

    useEffect(() => {
        if(!token && location.pathname !== '/login'){
            return navigate("/login");
        } else if(token && location.pathname === "/login"){
            return navigate("/");
        }
    }, [navigate, location, token])

    return children;
}

export default ProtectRoute;