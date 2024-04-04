import React from 'react';
import Modal from '../ui/Modal';
import { useForm } from 'react-hook-form';

const AddTaskModal = ({isOpen,setIsOpen}) => {
const { register, handleSubmit } =useForm();

const onSubmit =(data) => {
    console.log(data);
}

    return (
        <Modal title='add task' isOpen={isOpen} setIsOpen={setIsOpen} >  
        <form onSubmit={handleSubmit( onSubmit)} >
            <div className='flex flex-col gap-3'>
                <label htmlFor="title">
                    Title
                </label>
                <input className='w-full rounded-md' type="text " id='title' { ...register('name')} />
            </div>
            <div className='flex flex-col mb-2'>
                <label htmlFor="title">
                Description
                </label>
                <textarea className='w-full rounded-md' type="text " id='Description' { ...register('Description')} />
            </div>
            <label htmlFor="assigned to"> Assigned to</label>
            <select className='w-full rounded-md mb-2' id='assignedTo' {...register('assignedTo')}
            >
                <option value='abir'>abir</option>
                <option value='korim'>koim</option>
                <option value='rahim'>rahim</option>
                <option value='jonaki'>jonaki</option>
                <option value='salam'>salam</option>

            </select>

            <div className='flex flex-col mb-2'>
                <label htmlFor="priority">
                Priority
                </label>
                <select className='w-full rounded-md' id='priority' { ...register('Description')}> 
                
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
                </select>
            </div>
            <div className='flex gap-3 justify-end'>

            <button className='btn btn-danger' type='button'>cancel</button>
                <button className='btn btn-primary' type='button'>Submit</button>
            </div>
        </form>
        </Modal>
    );
};

export default AddTaskModal;