import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ReportForm()
{
    return (
        <div>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="body-form-container flex-column w-25">
                    <Form>
                        <h1 className="text-center fw-bold">Report a Safety Issue</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>State:</Form.Label>
                            <Form.Control type="" placeholder="Enter State" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>License Plate:</Form.Label>
                            <Form.Control type="" placeholder="License Plate Number" />
                        </Form.Group>

                        <div className="d-flex justify-content-evenly">
                            <div className="d-flex flex-column w-25">
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check className="body-form-checkbox" type="checkbox" label="Headlight" />
                                    <Form.Check className="body-form-checkbox" type="checkbox" label="Break Light" />
                                    <Form.Check className="body-form-checkbox" type="checkbox" label="Front Blinker" />
                                </Form.Group>
                            </div>

                            <div className="d-flex flex-column w-25">
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check className="body-form-checkbox" type="checkbox" label="Tail Light" />
                                    <Form.Check className="body-form-checkbox" type="checkbox" label="Reverse Light" />
                                    <Form.Check className="body-form-checkbox" type="checkbox" label="Rear Blinker" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <Button className="btn btn-lg" variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>


        </div>


    );
}

export default ReportForm;