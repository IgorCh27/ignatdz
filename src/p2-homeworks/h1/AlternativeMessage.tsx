import React from 'react';

type DataType = {
    avatar: string
    name: string
    message: string
    time: string
}
type AlternativeType = {
    messageData: DataType
}

function AlternativeMessage({messageData}: AlternativeType) {
    return (
        <div>
            <img src={messageData.avatar} alt={"avatarka"}/>
            <div>{messageData.name}</div>
            <div>{messageData.message}</div>
            <div>{messageData.time}</div>
        </div>
    )
}

export default AlternativeMessage
