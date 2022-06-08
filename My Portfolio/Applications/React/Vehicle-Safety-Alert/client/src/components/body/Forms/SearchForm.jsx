import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm()
{
    return (

        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="body-form-container flex-column w-25">
                <Form>
                    <h1 className="text-center fw-bold">Check a License Plate</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>State:</Form.Label>
                        <Form.Control type="" placeholder="Enter State" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>License Plate:</Form.Label>
                        <Form.Control type="" placeholder="License Plate Number" />
                    </Form.Group>

                    <div className="d-flex flex-column">
                        <Button className="btn btn-lg" variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );

}
export default SearchForm;
