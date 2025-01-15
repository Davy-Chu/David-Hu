import './Job.css';
export default function Job(props) {
    return (
        <div className="job-experience">
            <div className="job-date">
                <div class="date">{props.date}</div>
            </div>
            <div className="job-details">
                <div className="company">{props.company}</div>
                <div className="title">{props.title}</div>
                <p className='desc'>{props.desc}</p>
            </div>
        </div>
    )
}