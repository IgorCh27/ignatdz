import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const klass = s.meti + " " + s[props.affair.priority]
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    return (
        <div className={s.affair}>
           <div className={s.meti}>{props.affair.name}</div>
            <div className={klass}>{props.affair.priority}</div>
            <button className={s.meti + " " + s.item} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
