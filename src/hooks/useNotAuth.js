import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PATHS } from "../constants";

export default function useNotAuth() {
    const history = useHistory();
    const currentUser = useSelector(state => state.Auth.currentUser);
    
    useEffect(function () {
        if (currentUser !== null) {
            history.push(PATHS.HOMEPAGE);
        }
    }, [currentUser, history])
}