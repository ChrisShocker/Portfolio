import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm()
{
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="body-form-container flex-column w-50">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>State:</Form.Label>
                        <Form.Control type="" placeholder="Enter State" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>License Plate:</Form.Label>
                        <Form.Control type="" placeholder="License Plate Number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Headlight" />
                        <Form.Check type="checkbox" label="Tailight" />
                        <Form.Check type="checkbox" label="Break Light" />
                        <Form.Check type="checkbox" label="Reverse Light" />
                        <Form.Check type="checkbox" label="Front Blinker" />
                        <Form.Check type="checkbox" label="Back Blinker" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>

    );
}

export default SearchForm;