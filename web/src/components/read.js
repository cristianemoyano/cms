import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { Table, Button } from 'semantic-ui-react'

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6307c4363a2114bac76b3bb9.mockapi.io/api/v1/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }
    const onDelete = (id) => {
        axios.delete(`https://6307c4363a2114bac76b3bb9.mockapi.io/api/v1/fakeData/${id}`)
            .then(() => {
                getData();
            })
    }
    const getData = () => {
        axios.get(`https://6307c4363a2114bac76b3bb9.mockapi.io/api/v1/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
    return (
        <div className='main '>
            <table class="table text-white">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data) => {
                        return (
                            <tr>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>

                                <td>
                                    <Link to='/update'>
                                        <button onClick={() => setData(data)} class="btn btn-primary mb-3">Editar</button>
                                    </Link>
                                </td>

                                <td>
                                    <button onClick={() => onDelete(data.id)} class="btn btn-danger mb-3">Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}