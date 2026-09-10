import { LogoIcon } from "./icons/logoIcon"
import { TwitterIcon } from "./icons/twitterIcon"
import { YoutubeIcon } from "./icons/youtubeIcon"
import { SideBarItems } from "./SidebarItem"

export const SideBar= ()=> {
    return <div className="h-screen w-50 border-r border-gray-300 bg-white fixed left-0 top-0">
        <div className="flex pt-2 items-center gap-1 cursor-pointer">
            <div>
                <LogoIcon></LogoIcon>
            </div>
            <div className="text-purple-400 text-lg font-bold">
                Second Brain
            </div>
        </div>
        <div className="pt-4">
            <SideBarItems text="Twitter" icon={<TwitterIcon></TwitterIcon>}></SideBarItems>
            <SideBarItems text="Youtube" icon={<YoutubeIcon></YoutubeIcon>}></SideBarItems>
        </div>
    </div>
}