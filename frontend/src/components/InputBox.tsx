export const Input= ({placeholder, ref}: {placeholder:string; ref: any})=> {
    return <div>
        <input ref={ref} placeholder={placeholder} type="text" className="px-4 py-2 rounded border border-gray-300 m-1" />
    </div>
}