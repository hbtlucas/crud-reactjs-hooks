import react, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import DadosTable from './dadostable';

function Home(){

    return (
        <Fragment>
            <div style={{margin:"20px"}}>
                <Table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DadosTable.map((reg) => (
                                <tr>
                                    <td>{reg.name}</td>
                                    <td>{reg.age}</td>
                                    <td>{reg.email || 'N/A'}</td>
                                    <td>
                                        <Button onClick={() => alert(reg.id)} variant="primary">Editar</Button>
                                        <Button onClick={() => alert(reg.id)} variant="danger" style={{ marginLeft: "10px" }}>Excluir</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}

export default Home;