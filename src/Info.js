
import React from "react";
import {Link} from 'react-router-dom';

function Info  () {



    const url="#";
    return (
        <div className={"sign"}>
            <p id="psin">Sign In</p>


                <form>
                    <label htmlFor="email" id="mail"> Email</label><br/>
                    <input type="email" id="email" name="email" placeholder="yourname@gmail.com"/><br/>
                    <br/>
                    <label htmlFor="newpsd" id="psd" >New Password </label><br/><icon/>
                    <input type="password" id="newpsd" name="nepsd" /><br/>
                    <a style={{textDecoration: 'none'}} href={url} id="remb" >Remember me</a>
                    <a style={{textDecoration: 'none'}} href={url} id="forgot"> Forgot Password?</a><br/><br/>
                    <button id={'btn'}>Sign in</button>
                    <Link to='/Signin'>
                    <p>signin</p>
                    </Link>
                </form>



        </div>
    )
}
export default Info