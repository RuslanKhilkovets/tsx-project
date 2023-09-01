import React, {FC} from "react"
import { IUser } from "../types/types";


interface UserItemProps{
    user: IUser;
    onClick: (user: IUser) => void;
}


const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return(
        <>
            <div style={{padding: "10px 0"}} onClick={() => onClick(user)}>
                {user.id}. {user.name} lives at {user.address.city} in the {user.address.street} street
            </div>  
        </>
    )
}                

export default UserItem;