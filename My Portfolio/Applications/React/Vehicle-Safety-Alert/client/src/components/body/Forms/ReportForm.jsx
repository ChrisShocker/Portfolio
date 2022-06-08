import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ReportForm()
{

    const [report, setReport] = useState({
        state: "",
        licensePlate: "",
        issue: ""
    });

    function handleChange(event)
    {
        const { name, value } = event.target;
        setReport(prevValue =>
        {
            return {
                ...prevValue,
                [name]: value,
            }
        });
    }

    function handleCheckbox(event)
    {
        // console.log(event.target.labels)
        const { name, value } = event.target;
        console.log(value);
        setReport(prevValue =>
        {
            return {
                ...prevValue,
                [name]: value,
            }
        });
    }

    async function handleSubmit(event)
    {
        await event.preventDefault();
        console.log(report);
        // await fetch("/createReport", {
        //     method: 'Post',
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(report)
        // })
        //     .then((error) =>
        //     {
        //         if (error)
        //             console.log(error);
        //         console.log("Report Sent");
        //     })
        //     .then(() =>
        //     {
        //         alert("Report Sent");
        //         window.location.reload(true);
        //     })
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="body-forms-ReportForm-container flex-column rounded w-25">

                <Form onSubmit={handleSubmit}>
                    <h1 className="text-center fw-bold">Report a Safety Issue</h1>
                    <Form.Group className="mb-3" htmlFor="state" controlId="state">
                        <Form.Label>State:</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="text"
                            name="state"
                            placeholder="Enter State"
                            value={report.state}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="licensePlateNumber">
                        <Form.Label>License Plate:</Form.Label>
                        <Form.Control
                            onChange={handleChange}
                            type="text"
                            name="licensePlate"
                            placeholder="License Plate Number"
                            value={report.licensePlate}
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-evenly">
                        <div className="d-flex flex-column w-25">
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check 
                                onChange={handleCheckbox}
                                className="body-forms-ReportForm-checkbox" 
                                type="checkbox" 
                                label="Headlight"
                                name="issue"
                                value="headlight"
                                />
                                <Form.Check className="body-forms-ReportForm-checkbox" type="checkbox" label="Break Light" />
                                <Form.Check className="body-forms-ReportForm-checkbox" type="checkbox" label="Front Blinker" />
                            </Form.Group>
                        </div>

                        <div className="d-flex flex-column w-25">
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className="body-forms-ReportForm-checkbox" type="checkbox" label="Tail Light" />
                                <Form.Check className="body-forms-ReportForm-checkbox" type="checkbox" label="Reverse Light" />
                                <Form.Check className="body-forms-ReportForm-checkbox" type="checkbox" label="Rear Blinker" />
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
    );
}

export default ReportForm;