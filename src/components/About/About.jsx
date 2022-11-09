import React from 'react'
import { getAll } from '../../api/api';

function About() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        getAll(setData)
    console.log(data)
      
    }, [])
    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.email}</p>
                            <h2>{item.body}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default About