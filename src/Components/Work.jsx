import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Work(props) {
    const { work } = props;
    return (
        <div className="work">
            <div className="work-group">
                <p className="work-name">{work.tilte}</p>
                <p className="work-desc">{work.description}</p>
            </div>
            <p className="work-deadline">{work.deadline}</p>
            <button className="remove-btn" onClick={() => {
                props.handleRemove(work.id);
            }}>
                <FontAwesomeIcon icon={faTrashAlt} className="remove-icon"></FontAwesomeIcon>
            </button>
        </div>
    );
}

export default Work;