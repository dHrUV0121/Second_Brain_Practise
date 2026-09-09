import type { ReactElement } from "react";

export const SideBarItems= ({text, icon}:{
    text: string;
    icon:ReactElement;
})=>{
    return <div className="flex items-center text-gray-700">
        <div className="p-1">
            {icon}
        </div>
        <div className="p-1">
            {text}
        </div>
    </div>
}