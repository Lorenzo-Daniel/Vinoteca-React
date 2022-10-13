import React from "react";

const Spinner = ({tipo }) => {
    

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className=' spinner-border m-auto' role="status">
              <span>{tipo}</span> 
            </div>
        </div>
    )
}

export default Spinner;