"use client";
import React, { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useNavigate } from 'react-router-dom';

function Edit({ setDadosTable, dadosTable }) {

    let history = useNavigate();

    let { id } = useParams();
    //pegar os dados de setupdateuser e salvar em updateuser
    const [updateUser, setUpdateUser] = useState({
        name: '',
        age: '',
        email: ''
    });

    useEffect(()=>{const UsertoEdit = dadosTable.find(user => user.id === id); //recuperando dados do usuário por id
    if (UsertoEdit) {
        setUpdateUser({
            id,
            name: UsertoEdit.name,
            age: UsertoEdit.age,
            email: UsertoEdit.email,
        })
    } else {
        alert('Usuário não encontrado');
        history('/');
        }
    },[id,dadosTable, history]);

    const EditUser = () => {
        setDadosTable(dadosTable => {
            return dadosTable.map(user => {
                if (user.id === id) {
                    return updateUser; // Substitui os dados do usuário a ser editado
                } else {
                    return user; // Mantém os outros usuários inalterados
                }
            });
        });
        //console.log(id);
        history('/');
        }
    
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Control 
                        placeholder="Nome" 
                        name="name" 
                        value={updateUser.name}
                        onChange={e => setUpdateUser({...updateUser, name: e.target.value})}/*permite que o valor seja alterado*//>
                         
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        placeholder="Idade" 
                        name="age" 
                        value={updateUser.age}
                        onChange={e => setUpdateUser({...updateUser, age: e.target.value})}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        placeholder="Email" 
                        name="email" 
                        value={updateUser.email}
                        onChange={e => setUpdateUser({...updateUser, email: e.target.value})} 
                    />
                </Form.Group>
                <Button onClick={EditUser}>Salvar</Button>
            </Form>
        </div>
    );
}

export default Edit;
