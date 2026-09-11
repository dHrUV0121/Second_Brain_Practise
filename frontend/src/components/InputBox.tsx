export const Input= ({onChange, placeholder}: {placeholder:string; onChange: ()=> void})=> {
    return <div>
        <input placeholder={placeholder} type="text" className="px-4 py-2 rounded border border-gray-300 m-1" onChange={onChange} />
    </div>
}