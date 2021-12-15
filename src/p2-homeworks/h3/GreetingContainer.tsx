import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimedName = e.currentTarget.value.trim()
        if(trimedName) {
            setName(trimedName)
            setError("")
        } else {
            setName("")
            setError("Name is required!")
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)
        setName("")
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter" && name) {
            addUser()
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            addUser={addUser}
            onEnter={onEnter}
            setNameCallback={setNameCallback}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
