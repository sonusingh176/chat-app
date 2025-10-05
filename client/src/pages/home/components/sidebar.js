import React, { useState } from "react";
import Search from "./search";

function Sidebar(){
    const [searchKey,setSearchKey] =useState('');


    return (
        <div className="app-sidebar">
            <Search searchKey={searchKey} setSearchKey={setSearchKey}></Search>
        </div>
    ) 
}

export default Sidebar;
