import React from 'react'

function Menu(props) {
    return (
        <div className='menu-container'>
            {
                props.items.map((item) => {
                    return <article key={item.id} className='item'>
                        <img src={item.img} alt={item.title} className='item-img'/>
                        <div className='item-info'>
                            <div className='item-header'>
                                <h4 className='item-title'>{item.title}</h4>
                                <h4 className='item-price'>${item.price}</h4>
                            </div>
                            <p className='item-desc'>{item.desc}</p>
                        </div>
                    </article>
                })
            }
        </div>
    )
}

export default Menu
