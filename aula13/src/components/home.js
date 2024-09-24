import react, { Fragment, useState } from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,useNavigate} from 'react-router-dom';


function Home({ dadosTable, setDadosTable }){

    //função pra deletar
    let history = useNavigate();

    const DeleteFunction = (id) => {
        const newTable = dadosTable.filter(item => item.id !== id);
        setDadosTable(newTable);
        history('/'); 
    };

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
                            dadosTable.map((item) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.email || 'N/A'}</td>
                                    <td>
                                    <Link to={`/edit/${item.id}`}>
                                    <Button variant="primary">Editar</Button>
                                    </Link>
                                    <Button onClick={() => DeleteFunction(item.id)} variant="danger" style={{ marginLeft: "10px" }}>Excluir</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link to="/create">
                <Button>Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;