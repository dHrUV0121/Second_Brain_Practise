import { useRef, useState } from "react"
import { Button } from "./Button"
import { CloseIcon } from "./icons/closeIcon"
import { Input } from "./InputBox"
import axios from "axios"
import { BACKEND_URL } from "../config"

enum ContentType {
    Youtube= "youtube",
    Twitter= "twitter"
}

export const CreatePostModel = ({ open, onClose }) => {
    const titleRef= useRef<HTMLInputElement>(null);
    const linkRef= useRef<HTMLInputElement>(null);
    const [type, setType]= useState(ContentType.Youtube)

    async function addContent(){
        const title= titleRef.current?.value;
        const link= linkRef.current?.value;

        await axios.post(`${BACKEND_URL}api/v1/content`,{
            link,
            title,
            type
        }, {
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
    }
    return (
        <div>
            {open && (
                <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white p-4 rounded">
                            <div onClick={onClose} className="flex justify-end cursor-pointer">
                                <CloseIcon />
                            </div>
                            <div>
                                <Input ref={titleRef} placeholder={"Title"}></Input>
                                <Input ref={linkRef} placeholder={"Link"}></Input>
                                <div className="flex gap-1 p-2">
                                    <Button size="sm" text="Youtube" variant={type === ContentType.Youtube? "primary": "secondary"} onClick={() =>{setType(ContentType.Youtube)}}></Button>
                                    <Button size="sm" text="Twitter" variant={type === ContentType.Twitter? "primary": "secondary"} onClick={() =>{setType(ContentType.Twitter)}}></Button>
                                </div>
                                <div className="flex justify-end">
                                    <Button onClick={addContent} variant="primary" text="Submit" size="sm"></Button>                                    
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

