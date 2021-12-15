import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1wlTDFXbBVgGSqKGrt83uwlgjNg9KdFVhw&usqp=CAU',
    name: 'Some Name',
    message: 'some text',
    time: '22:00'
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
                />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                messageData={messageData}
            />
            <hr/>
        </div>
    )
}

export default HW1
