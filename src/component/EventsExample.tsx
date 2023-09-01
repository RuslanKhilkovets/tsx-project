import React, {FC, useState, useRef} from "react";

interface EventsExampleProps{
    
}

const EventsExample: FC<EventsExampleProps> = () => {
    const [value, setValue] = useState<string>("")
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {

    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log("drop")
    }



    return(
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder="Керований"/>
            <input type="text" ref={inputRef} placeholder="Не керований"/>

            <button onClick={clickHandler}>Click</button>
            <div 
                onDrop={dropHandler} 
                onDragLeave={leaveHandler} 
                onDragOver={dragWithPreventHandler} 
                className="" 
                style={{width: "100px", height: "100px", background: isDrag ? "red" : "black"}}
            >

            </div>
            <div onDrag={dragHandler} draggable className="" style={{width: "100px", height: "100px", background: "black", margin: 10}}></div>
        </div>
    )
}

export default EventsExample;