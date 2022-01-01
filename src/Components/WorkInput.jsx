import { useReducer, useRef, memo } from 'react';
import { setTitle, setDesc, setDeadline } from './Actions/inputActions'
import { initialState, inputReducers } from './reducers/inputReducers'

function WorkInput(props) {
    const [inputState, dispatch] = useReducer(inputReducers, initialState);
    const { title, desc, deadline } = inputState;

    const { setWork } = props;
    const titleTag = useRef();


    function handleSubmit(event) {
        event.preventDefault();
        setWork((prev) => {
            const name = title.trim().replaceAll(/\s\s+/g, '');
            const description = desc.trim().replaceAll(/\s\s+/g, '');
            const dline = deadline && new Date(deadline).toLocaleString();
            const id = prev[prev.length - 1] === undefined ? 1 : prev[prev.length - 1].id + 1;
            return [
                ...prev,
                {
                    id,
                    title: name,
                    description,
                    deadline: dline
                },
            ]
        })
        titleTag.current.focus();
        dispatch(setTitle(''))
        dispatch(setDeadline(''))
        dispatch(setDesc(''))
    }

    return (
        <form className="work-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name : </label>
                <input ref={titleTag} value={title} onChange={(e) => dispatch(setTitle(e.target.value))} id="name" name="name" type="text" required />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description : </label>
                <input value={desc} onChange={(e) => dispatch(setDesc(e.target.value))} id="description" name="description" type="text" required />
            </div>
            <div className="form-group">
                <label htmlFor="deadline">Deadline : </label>
                <input value={deadline} onChange={(e) => dispatch(setDeadline(e.target.value))} id="deadline" name="deadline" type="datetime-local" />
            </div>
            <button type="submit">Add</button>
        </form>
    );
}

export default memo(WorkInput);