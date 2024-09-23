"use client"
import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,useNavigate} from 'react-router-dom';

function Edit({ setDadosTable, dadosTable }){

    let history = useNavigate();

    dadosTable.map((id) => (
        const [updateUser, setupdateUser] = useState({
            name: item.name,
            age: item.age,
            email: item.email,
        });
    ))

const EditUser = (updateUser) => {
       if (updateUser.name && updateUser.age && updateUser.email) {
            const newupdateuserWithId = {
                //id: String(dadosTable.length + 1), // Gera um novo id baseado no comprimento do array
                id:  Math.random().toString(36).substring(2),
                name: updateUser.name,
                age: updateUser.age,
                email: updateUser.email
            };
            console.log(updateUser)
            setDadosTable(dadosTable => [...dadosTable, newupdateuserWithId]);
            //console.log(dadosTable);
            history('/');
        }
        else {
            alert("Por favor, preencha todos os campos!");
        } 
    }
}