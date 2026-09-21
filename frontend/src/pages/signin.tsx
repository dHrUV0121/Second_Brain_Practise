import { useRef } from "react";
import { Button } from "../components/Button"
import { Input } from "../components/InputBox"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin= ()=>{
    const usernameRef= useRef<HTMLInputElement>(null);
    const passwordRef= useRef<HTMLInputElement>(null);
    const navigate= useNavigate();
    
    async function login(){
        const username= usernameRef.current?.value;
        const password= passwordRef.current?.value;
        const response= await axios.post(`${BACKEND_URL}api/v1/signin`, {
            username,
            password
        });
        const jwt= response.data.token;
        localStorage.setItem("token", jwt)
        navigate("/dashboard")
    }
    
    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white rounded border border-gray-200 p-4">
            <Input ref={usernameRef} placeholder="Username"></Input>
            <Input ref={passwordRef} placeholder="Password"></Input>
            <div className="flex justify-center pt-4">
                <Button onClick={login} variant="primary" size="md" text="Login"></Button>
            </div>
        </div>

    </div>
}