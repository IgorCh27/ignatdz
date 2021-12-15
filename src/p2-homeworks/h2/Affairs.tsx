import React from 'react'
import Affair from './Affair'
import s from './Affairs.module.css'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter("low")
    }

/*    const setFilter = (value: FilterType) => {
        props.setFilter(value)
    }
    <button onClick={()=>setFilter('alllow')}></button>*/

    const klass = (filter: FilterType) => {
        return s.item + (props.filter === filter ? " " + s["active"] : "")
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={klass("all")}>All</button>
            <button onClick={setLow} className={klass("low")}>Low</button>
            <button onClick={setHigh} className={klass("high")}>High</button>
            <button onClick={setMiddle} className={klass("middle")}>Middle</button>
        </div>
    )
}

export default Affairs
