import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

function TaskForm({ add }) {
    const nameRef = useRef()
    const descriptionRef = useRef()
    const levelRef = useRef(LEVELS.NORMAL)

    function addTask(e) {
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value

        )

        add(newTask)
        e.target.reset()
    }


    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} type="text" id='inputName' className='form-control form-control-lg' required autoFocus placeholder='task name'/>
                <input ref={descriptionRef} type="text" id='inputDescription' className='form-control form-control-lg' required  placeholder='task description'/>
                <label htmlFor="selectLevel" className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selecLevel'>    
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>

                </select>
            </div>
            <button type='submit' className='btn btn-dark btn-lg ms-2'>Add</button>
        </form>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}
export default TaskForm