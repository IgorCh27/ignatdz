import React, {useState} from 'react'
import Affairs from './Affairs'
import AlternativeAffairs from "./AlternativeAffairs";

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type FilterType = 'all' | AffairPriorityType
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}


// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): AffairType[] => {
    switch (filter) {
        case "low":
            return affairs.filter(f => f.priority === 'low')
        case "middle":
            return affairs.filter(f => f.priority === 'middle')
        case "high":
            return affairs.filter(f => f.priority === 'high')
    }
    return affairs
    /*    if (filter === 'all') {
            return affairs
        } else {
            affairs.filter(f => f.priority === filter)
        }*/
}

export const deleteAffair = (affairs: AffairType[], _id: number): Array<AffairType> => {
    return affairs.filter(m => m._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeAffairs/>
            <hr/>
        </div>
    )
}

export default HW2
