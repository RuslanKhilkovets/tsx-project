import React, {FC, PropsWithChildren, useState} from 'react'


export enum CardVariant{
    outlined = "outlined",
    primary = "primary",
    borderRadius = "borderRadius"
}


interface CardProps extends PropsWithChildren {
    width?: string,
    height?: string,
    onClick: (data: string) => void | undefined,
    variant?: CardVariant
}


const Card: FC<CardProps> = ({width, height, variant, onClick, children}: CardProps) => {
    const [data, setData] = useState("some data")
    return(
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? "3px solid black" : "none",
            background: variant === CardVariant.primary ? "black" : "",
            borderRadius: variant === CardVariant.borderRadius ? "50%" : "" 
        }}
            onClick={() => onClick && onClick(data)} 
        >
            {children}
        </div>
    )
}

export default Card;




















// import React, {FC, PropsWithChildren, useState} from "react"

// export enum CardVariant  {
//     outlined = "outlined",
//     primary = "primary"
// }


// interface CardProps extends PropsWithChildren {
//     width?: string;
//     height?: string;
//     variant?: CardVariant
//     onClick: (num: number) => void; // якщо щось має повертати то вказувати тип даних повернутого значення
// }

// const Card: FC<PropsWithChildren<CardProps>> = ({width, height, variant, children, onClick}: CardProps) => {
    
//     const [state, setState] = useState(0)
//     return(
//         <div style={{width, height, 
//             border: variant === CardVariant.outlined ?  "3px solid gray": "none",
//             background: variant === CardVariant.primary ? "lightgray" : ""
//         }}
//              onClick={() => onClick(state)}
//         >
//             {children}
//         </div>
//     )
// }
// export default Card;