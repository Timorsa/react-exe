import React, {useState, useEffect} from 'react';

const Form = ({ onSave, editingMode, editingItem}) => {
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        if(editingMode){
            setDate(editingItem.date);
            setName(editingItem.name);
            setLocation(editingItem.location);
        }
    }, [editingItem, editingMode])

    const submitForm = () => {
        if(editingMode){
            onSave({
                id: editingItem.id,
                name,
                date,
                location
            })
        }else onSave({date, name, location})
    }

    return (
        <form onSubmit={() =>submitForm()} >
            <input required className='form-input' placeholder='Date' type='text' value={date} onChange={(e) => setDate(e.target.value) }/>
            <input required className='form-input' placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value) }/>
            <input required className='form-input' placeholder='Location' type='text' value={location} onChange={(e) => setLocation(e.target.value) }/>
            <button className='form-button' type='submit'>{editingMode? 'Update' : 'Save'}</button>
        </form>
    )
}

export default Form
