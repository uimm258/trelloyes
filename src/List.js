import Card from './card'
import './List.css'
import React from 'react'

function List(props){
    const list = props.cards.forEach(item =>
        <Card key={item.id} title={item.title} content={item.content} />
    );
        return (
        <section className="List">
            <header class="List-cards">
                {props.header}
            </header>
            <div className="List-cards">
                {list}
            </div>
            <button
                type='button'
                className='List-add-button'>
                + Add Random Card
            </button>
        </section>
    )
}

export default List
