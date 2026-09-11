import { Button } from "../components/Button"
import { Input } from "../components/InputBox"

export const Signup= ()=>{
    return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white rounded border border-gray-200 p-4">
            <Input placeholder="Username"></Input>
            <Input placeholder="Password"></Input>
            <div className="flex justify-center pt-4">
                <Button variant="primary" size="md" text="Signup"></Button>
            </div>
        </div>

    </div>
}