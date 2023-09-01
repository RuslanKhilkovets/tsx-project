import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";


interface UserItemPageParams{
    id: string;
    [key: string]: string | undefined;

}

const UserItemPage:FC = () =>{
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const navigate = useNavigate()
    
    useEffect(() => {
        fetchUser()
    }, [])
    const fetchUser = async () => {
        try{
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        }
        catch(e){
            alert(e)
        }
    }
    return(
        <div>
            <button onClick={() => navigate("/users")}>Back</button>
            <h1>User page {user?.name}</h1>
            <div className="">
                {user?.email}
            </div>
            <div className="">
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    )
}

export default UserItemPage;