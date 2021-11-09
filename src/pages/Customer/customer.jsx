import {useParams} from 'react-router-dom'
import { members } from '/home/nicky/kenzie1/react-atividade-s2-acesso-de-usuario-2-nicollykasuga/src/Components/Members/index.jsx'
import './style.css'
import {Link} from 'react-router-dom'
function Customer () {
    const params = useParams()
    const member = members.find((item) => item.id === params.id);

    return(
        <section className="CustomerSection">
            <div className="CustomerPage">
                <h1>Detalhes do Cliente</h1>
                 <p>Nome:  {member && member.name}</p>
                    <div className="ContainerCustomer">
                        <Link className='LinkCustomer' to="/">Voltar</Link>
                    </div>
            </div>
        </section>
    )

}

export {Customer}