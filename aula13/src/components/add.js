"use client"
import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,useNavigate} from 'react-router-dom';

function Add({ setDadosTable }){

    //const [dadosTable, setDadosTable] = useState(DadosTable);

    let history = useNavigate();

    const [newUser, setNewUser] = useState({
        name: '',
        age: '',
        email: ''
    });

    const AddUser = (newUser) => {
       if (newUser.name && newUser.age && newUser.email) {
            const newUserWithId = {
                //id: String(dadosTable.length + 1), // Gera um novo id baseado no comprimento do array
                id:  Math.random().toString(36).substring(2),
                name: newUser.name,
                age: newUser.age,
                email: newUser.email
            };
            //alert(newUserWithId.name)
            console.log(newUserWithId)
            setDadosTable(dadosTable => [...dadosTable, newUserWithId]);
            //console.log(dadosTable);
            history('/');
        }
        else {
            alert("Por favor, preencha todos os campos!");
        } 
    }

    const Inputfunction = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };


    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Control placeholder="Idade" name="age" value={newUser.age} onChange={Inputfunction}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control placeholder="Email" name="email" value={newUser.email} onChange={Inputfunction}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control placeholder="Nome" name="name" value={newUser.name} onChange={Inputfunction}/>
                </Form.Group>
                <Button onClick={() => AddUser(newUser)}>Adicionar</Button>
                </Form>
        </div>
    )
}

export default Add;