import { ShareIcon } from "./icons/shareIcon"

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export const Card = (props: CardProps) => {
    return <div>
        <div className="bg-white rounded-md shadow-md  border-slate-100 p-4 max-w-72 border min-h-42 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon size="md"></ShareIcon>
                    </div>
                    {props.title}
                </div>
                <div className="flex items-center">
                    <div className="pr-1 text-gray-500">
                        <a href={props.link} target="_blank">
                            <ShareIcon size="md"></ShareIcon>  
                        </a>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon size="md"></ShareIcon>  
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {props.type === "youtube" && <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${props.link.split("v=")[1]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                
                {props.type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={props.link}></a>
                </blockquote>}
                
            </div>
        </div>
    </div>
    
}