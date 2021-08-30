import React from 'react'

function Categories(props) {
    return (
        <div className='categories-container'>
            {
                props.categories.map((category, index) => {
                    return <button onClick={() => props.filterItems(category)} className='filter-btn' key={index}>{category}</button>
                })
            }
        </div>
    )
}

export default Categories
