import { Button } from "./Button"
import { CloseIcon } from "./icons/closeIcon"

export const CreatePostModel = ({ open, onClose }) => {
    return (
        <div>
            {open && (
                <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <span className="bg-white p-4 rounded">
                            <div className="flex justify-end cursor-pointer">
                                <CloseIcon />
                            </div>
                            <div>
                                <Input placeholder={"Title"}></Input>
                                <Input placeholder={"Link"}></Input>
                                <div className="flex justify-end">
                                    <Button variant="primary" text="Submit" size="sm"></Button>                                    
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

const Input= ({onChange, placeholder}: {onChange: ()=> void})=> {
    return <div>
        <input placeholder={placeholder} type="text" className="px-4 py-2 rounded border border-gray-300 m-1" onChange={onChange} />
    </div>
}