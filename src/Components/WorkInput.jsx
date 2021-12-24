function WorkInput(props) {
    return (
        <form className="work-form" onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name : </label>
                <input id="name" name="name" type="text" required />
            </div>
            <div className="form-group">
                <label htmlFor="description">Decription : </label>
                <input id="description" name="description" type="text" required />
            </div>
            <div className="form-group">
                <label htmlFor="deadline">Deadline : </label>
                <input id="deadline" name="deadline" type="datetime-local" />
            </div>
            <button type="submit">Add</button>
        </form>
    );
}

export default WorkInput;