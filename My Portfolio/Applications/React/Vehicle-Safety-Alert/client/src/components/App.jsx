import React from "react";
import ReportForm from "./body/Forms/ReportForm";
import SearchForm from "./body/Forms/SearchForm";
import Intro from "./body/Intro";

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