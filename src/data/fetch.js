import React, { useEffect, useState } from "react";

function fetchData(){
    return(
        <div>
            {records.map((List,index)=> (
                <li key={index}>{list.id} | {list.name}</li>
            ))}
        </div>
    )
}

export default fetchData;