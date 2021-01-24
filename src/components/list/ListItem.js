import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ListItem = ({info, onEdit, onDelete}) => {
    return (
        <div className='list-item'>
            <div>{info.index}</div>
            <div>{info.date}</div>
            <div>{info.name}</div>
            <div>{info.location}</div>
            <div className='buttons'>
                <button color='secondary' variant='filled' onClick={() => onEdit(info)}>
                    <EditIcon/>
                </button>
                <button color='secondary' variant='filled' onClick={() => onDelete(info)}>
                    <DeleteIcon/>
                </button>
            </div>
        </div>
    )
}

export default ListItem
