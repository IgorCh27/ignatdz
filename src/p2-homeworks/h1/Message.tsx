import React from 'react'
import m from "./Message.module.css"


type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={m.message}>
            <img className={m.avatar} src={props.avatar} alt={"text"}/>
            <div className={m.content}>
                <div className={m.name}>{props.name}</div>
                <div className={m.text}>{props.message}</div>
                <div className={m.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
