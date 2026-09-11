import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/InputBox"
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Signup= ()=>{
    const usernameRef= useRef<HTMLInputElement>(null);
    const passwordRef= useRef<HTMLInputElement>(null);

    async function signup(){
        const username= usernameRef.current?.value;
        const password= passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}api/v1/signup`, {
            username,
            password
        });
        alert("You haved signed up!")
    }

    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white rounded border border-gray-200 p-4">
            <Input ref={usernameRef} placeholder="Username"></Input>
            <Input ref={passwordRef} placeholder="Password"></Input>
            <div className="flex justify-center pt-4">
                <Button onClick={signup} variant="primary" size="md" text="Signup"></Button>
            </div>
        </div>

    </div>
}