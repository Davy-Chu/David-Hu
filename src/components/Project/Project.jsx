import './Project.css';
export default function Project(props) {
    return (
        <div className="project">
            <div className="job-date">
                <div class="date">{props.date}</div>
            </div>
            <div className="project-details">
                <div className="name">{props.name}</div>
                <div className="tech">{props.technologies}</div>
                <p className='desc'>{props.desc}</p>
            </div>
        </div>
    )
}