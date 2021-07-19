import {useEffect} from 'react'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PATHS } from "../constants";

//
export default function useAuth() {
    const history = useHistory()
    const currentUser = useSelector(state => state.Auth.currentUser)
    
    useEffect(function () {
        if (!currentUser) {
            history.push(PATHS.LOGIN);
        }
    }, [currentUser, history])
}
