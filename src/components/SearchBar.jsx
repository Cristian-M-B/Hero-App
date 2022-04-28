import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SearchBar() {
    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value);
    }

    return (
        <Form>
            <Form.Control 
                type="text" 
                value={input}
                onChange={handleChange}
                placeholder="Search ..." 
            />
            {console.log(input)}
            {/* <Button variant="primary" type="submit">Send</Button> */}
        </Form>
    )
}
