import React from "react";
import Intro from "./body/Intro";
import ReportForm from "./body/forms/ReportForm";
import SearchForm from "./body/forms/SearchForm";

function App(){
    return(
        <div>
            <Intro></Intro>
            <ReportForm></ReportForm>
            <SearchForm></SearchForm>
        </div>
    );
}

export default App;