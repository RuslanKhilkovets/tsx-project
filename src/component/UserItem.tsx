import React, {FC} from "react"
import { IUser } from "../types/types";


interface UserItemProps{
    user: IUser;
}


const UserItem: FC<UserItemProps> = ({user}) => {
    return(
        <>
            <div style={{padding: "10px 0"}}>
                {user.id}. {user.name} lives at {user.address.city} in the {user.address.street} street
            </div>  
        </>
    )
}                

export default UserItem;