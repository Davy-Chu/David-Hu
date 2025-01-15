import './Job.css';
export default function Job(props) {
    return (
        <div className="job-experience">
            <div className="job-date">
                <h3>{props.date}</h3>
            </div>
            <div className="job-details">
                <div className="company">{props.company}</div>
                <div className="title">{props.title}</div>
                <p className='desc'>{props.desc}</p>
            </div>
        </div>
    )
}