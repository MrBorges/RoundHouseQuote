import React from "react";
import './QuoteBanner.css';

const QuoteBanner = ({Quote}) =>{
    if(Quote){
        return(
            <div>
                <p>{Quote}</p>
            </div>
        )
    } else {
        return (
            <div className="grabbed-quote">
                <p>Please, choose a category and submit.</p>
            </div>
        )
    }
    
}

export default QuoteBanner;