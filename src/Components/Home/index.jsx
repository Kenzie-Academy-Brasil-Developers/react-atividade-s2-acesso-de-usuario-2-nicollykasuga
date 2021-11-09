import {Link} from  'react-router-dom'
import './style.css'
function Home ({members}) {


    return(
        <>
        {members.map((member, index) =>{
            return (
             member.type === 'pj' ? (
                <div className="Container" key={index}>
                <Link className="Link" to={`/company/${member.id}`}>{member.name}</Link>
                </div>
            )
            :
            (
                <div className="Container" key={index}>
                <Link className="Link" to={`/customer/${member.id}`}>{member.name}</Link>
                </div>
            ))
        })}
        </>
    )
}

export default Home