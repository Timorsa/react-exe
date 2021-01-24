import React from 'react'
import ListItem from './ListItem';

const ItemList = ({listItems, onDelete, onEdit}) => {


    return (
        <div className='list'>
            {
                listItems.map((item, index) => 
                    <ListItem 
                        key={item.id} 
                        info={ {...item , index: index + 1 }}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                )
            }
        </div>
    )
}

export default ItemList
