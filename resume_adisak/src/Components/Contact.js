import React from 'react'
import { useSelector } from "react-redux";
function Header() {
    const reducer_user = useSelector(({ reducer_user }) => reducer_user)
    console.log(reducer_user)
    if (reducer_user.data !== null) {
        return (
            <section id="contact">
                <div className="row">
                        <h1>Contact Details</h1>
                        <p>
                            <span>Name : {reducer_user.data.name}</span><br />
                            <span>Cell : {reducer_user.data.cell}</span><br />
                            <span>Email : {reducer_user.data.email}</span><br />
                            <span>Line : {reducer_user.data.line}</span><br />
                        </p>
                </div>
            </section>
        );
    }else{
        return (
            <section id="contact">
               
            </section>
        );
    }
}


export default Header;