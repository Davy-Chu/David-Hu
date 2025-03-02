import './Work.css';
import Job from '../../components/Job/Job.jsx';
export default function Work() {
    return (
        <div className="work-page">
            <div className="page-content">
                <p className="work-desc">
                    I have experience working in full-stack development roles, as well as 
                    different types of work environments and technologies.
                </p>
                <h2 className="work-header">Timeline</h2>
                <Job
                    title="Software Engineer"
                    company="Laurier computing Society"
                    date="Current"
                    desc="Spearheaded the design and development of the company website, selecting platforms 
                    & crafting the interface, resulting in a significant 40% increased site traffic."
                />
                <Job
                    title="Embedded Software Developer"
                    company="Evertz Microsystems Ltd."
                    date="September 2024 - December 2024"
                    desc="Worked with a team of 7 on the advanced UI of 4 products, working with the backend team
                    to deliver new features and improve the user experience."
                />
                <Job
                    title="Software Developer"
                    company="CAA Club Group"
                    date="May 2023 - August 2023"
                    desc="Developed a dynamic dashboard in Angular, C#, and .NET using RESTful APIs to dynamically 
                    update in real-time with data fetched from the back end, providing information about 
                    development environment information such as statuses and timelines, used by the 
                    automation and DevOps teams of 25 members."
                />
            </div>
        </div>
    )
}