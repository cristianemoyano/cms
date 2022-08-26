import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate();

    const postData = (e) => {
        e.preventDefault();
        axios.post(`https://6307c4363a2114bac76b3bb9.mockapi.io/api/v1/fakeData`, {
            firstName,
            lastName,
        }).then(() => {
            navigate('/read')
        })
    }
    return (
        <div className="main">
            <form>
                <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder='Nombre'
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Apellido</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder='Apellido'
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div class="col-auto">
                    <button onClick={(e) => postData(e)} class="btn btn-primary mb-3">Crear</button>
                </div>
            </form>
        </div>
    )
}
