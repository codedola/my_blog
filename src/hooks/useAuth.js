import {useEffect} from 'react'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PATHS } from "../constants";

//
export default function useAuth() {
    const history = useHistory()
    const token = useSelector(state => state.Auth.token)
    
    useEffect(function () {
        if (!token || token === "") {
            history.push(PATHS.LOGIN);
        }
    }, [token, history])
}
