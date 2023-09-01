import React, {FC, PropsWithChildren, useEffect, useState} from 'react'
import classes from "../styles/Photos.module.scss"
import { IPhoto } from '../types/types'
import axios from "axios"
import List from './List'
import Photo from './Photo'




interface PhotosProps extends PropsWithChildren{

}

export const Photos: FC<PhotosProps> = ({children}: PhotosProps) => {
    const [photos, setPhotos] = useState<IPhoto[]>([])
    useEffect(() => {
        fetchPhotos()
    }, [])

    const fetchPhotos = async () => {
        try{
            const response = await axios.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos?_limit=10')
            setPhotos(response.data)
        }
        catch(e){
            alert(e)
        }
    }
    return(
        <div className={classes["photo-container"]}>
            <div className="photo-container__wrapper">
                <List 
                    items={photos} 
                    renderItem={(photo: IPhoto) => {
                        return <Photo url={photo.url} thumbnailUrl={photo.thumbnailUrl} title={photo.title} id={photo.id}/>
                    }}
                />
            </div>
        </div>
    )
}

export default Photos;