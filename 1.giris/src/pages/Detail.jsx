import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'

const Detail = () => {
    const { id } = useParams();
    const [getData, setgetData] = useState(null)

    useEffect(() => {
        if(id){
        setgetData(data.filter (dt => dt.id == id))
    }
    }, [id])

console.log(getData, "getData")
return (
    <div>{getData?.name}</div>
    /*<div>{getData?.description}</div>*/

)
}

export default Detail