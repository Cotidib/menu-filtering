import React from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

function Menu(props) {

    const handleNext = () => {
        if(props.currentPage < Math.ceil(props.items.length/10))
        {
            props.setRangeTop(props.rangeTop+10);
            props.setCurrentPage(props.currentPage+1);
        }
        
    }

    const handlePrev = () => {
        if(props.currentPage !== 1)
        {
            props.setRangeTop(props.rangeTop-10);
            props.setCurrentPage(props.currentPage-1);
        }
        
    }

    return (
        <div>
            <div className='menu-container'>
                {
                    props.items.slice(props.rangeTop-10, props.rangeTop).map((item) => {
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
            <div className='pages-container'>
                <button className='page-btn' onClick={handlePrev}><GrPrevious/></button>
                <div className='page'>{props.currentPage}</div>
                <button className='page-btn' onClick={handleNext}><GrNext/></button>
            </div>
        </div>
    )
}

export default Menu
