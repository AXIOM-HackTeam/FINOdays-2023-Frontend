import React, {useEffect} from 'react';
import {ProfileStyled} from "./Profile.styled";
import User from "../../store/User"
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate()

    useEffect(() => {

        if (!User.isAuth) {
            navigate('/login')
        }

    }, [])

    return (
        <ProfileStyled>
            
        </ProfileStyled>
    );
};

export default Profile;