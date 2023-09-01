import * as React from 'react';
import { IPhoto } from '../types/types';
import classes from "../styles/Photo.module.scss"



export const Photo: React.FC<IPhoto> = ({id, title, thumbnailUrl, url}: IPhoto) => {
    return(
        <div className={classes.photo}>
            <img src={url} alt={title} />
            <p className={classes.photo__title}>{title}</p>

        </div>
    )
}

export default Photo;