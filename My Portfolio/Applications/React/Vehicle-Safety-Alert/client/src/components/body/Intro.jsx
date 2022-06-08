import React, { useEffect } from "react";

function Intro()
{
    useEffect(() =>
    {
        var timer = setTimeout(() =>
        {
            alert("This website is still a WIP");

        }, 3000);
        return () =>
        {
            clearTimeout(timer);
        }
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
                <h1>Welcome!</h1>
            </div>
            <div>
                <p className="lead">
                    Please report the following issues to help keep our roads safe
                </p>
                <p className="lead">
                    Also, please lookup your License plate to ensure you're driving safe
                </p>
            </div>
        </div>
    );
}

export default Intro;