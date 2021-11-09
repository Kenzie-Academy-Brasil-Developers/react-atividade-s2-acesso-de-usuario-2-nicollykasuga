import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {members} from '/home/nicky/kenzie1/react-atividade-s2-acesso-de-usuario-2-nicollykasuga/src/Components/Members/index.jsx'
import './style.css'
function Company () {
    const params = useParams()
    const member = members.find((item) => item.id === params.id)

    return(
        <section className="CompanySection">
        <div className="CompanyPage">
            <h1>Detalhes da Empresa</h1>

            <p>Nome da empresa:  {member && member.name}</p>

            <div className="ContainerCompany">
            <Link className='LinkCompany' to="/">Voltar</Link>
            </div>
        </div>
        </section>
    )
}

export {Company}