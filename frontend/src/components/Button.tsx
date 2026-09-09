// making a generic button
// @import "tailwindcss";


interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void;
}

const varientStyle= {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

const sizeStyles={
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}

const defaultStyles= "rounded-md flex cursor-pointer"

// defined the properties our button would hold whilew writing the tailwind css 

export const Button = (props: ButtonProps) => {  // this button component takes the props ButtonProps as the input mentioned above and returns a button according to these properties 

    return <button onClick={props.onClick} className={`${varientStyle[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-1 flex items-center">{props.startIcon}</div> : null} {props.text} {props.endIcon}</button>
}

{/* <Button variant="primary" size="md" text="Click me" startIcon={"*"} onClick={() =>{}}></Button> */}

