import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const navigate = useNavigate();

    const postData = () => {
        axios.post(`https://6307c4363a2114bac76b3bb9.mockapi.io/api/v1/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            navigate('/read')
        })
    }
    return (
        <div className="main">
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}