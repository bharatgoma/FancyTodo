import React from 'react'

const Todos = ({ list, RemoveAll }) => {
    return (
        <div className='todos'>
            {
                list.map((item,index) => (
                    <div key={index} className='todositems'>
                        {item.startsWith('#') ? (
                            <p style={{color:'yellow'}}>{item}</p>
                        ) : (
                            item
                        )}
                    </div>
                ))
            }

            {list.length >= 1 && <button onClick={RemoveAll} className='remove'>Remove All</button>}

        </div>

    )
}

export default Todos