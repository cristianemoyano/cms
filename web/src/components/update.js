import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import Slider from './Slider';
import Product from './Product';

export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);

    const navigate = useNavigate();

    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`https://6307c4363a2114bac76b3bb9.mockapi.io/api/v1/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            navigate('/read')
        })
    }

    return (
        <div className='main'>
            {/* <Navbar />
            <Categories />
            <hr />
            <Carousel />
            <Slider/>
            <Product/> */}
            <form>
                <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder='Nombre'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Apellido</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder='Apellido'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div class="col-auto">
                    <button onClick={(e) => updateAPIData(e)} class="btn btn-primary mb-3">Guardar</button>
                </div>
            </form>
        </div>
    )
}

