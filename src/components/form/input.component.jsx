import { useController } from "react-hook-form";

export const InputLabelComponent = ({ htmlFor, label }) => {
    return (
        <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
        </label>
    )
}

export const TextInputComponent = ({ type = 'text', control, name, placeholder }) => {
    const { field } = useController({
        control: control,
        name: name,
        defaultValue: "",

    })
    return (
        <input
            type={type}
            placeholder={placeholder}
            {...field}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""

        />
    )
}


export const SelectOptionComponent = ({ control, name, options }) => {
    const { field } = useController({
        control: control,
        name: name,
        defaultValue: "",
    })
    return (
        <select {...field}
            id={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {options.map((row, index) => (
                <option key={row.value} value={row.value}>{row.label}</option>
            ))}
        </select>
    )
}


export const SelectRadioComponent = ({ control, name, options }) => {
    const { field } = useController({
        control: control,
        name: name,        
    });    
    return (
        <div className="flex items-center gap-4">
            {options && options.map((radioOpts,ind)=>(
                <div key={ind} className="flex items-center gap-2">
                    <input {...field} type="radio" id={name +'-'+radioOpts.value} value={radioOpts.value} />
                    <InputLabelComponent htmlFor={name +'-'+radioOpts.value} label={radioOpts.label} />
                </div>
            ))}
        </div>
    );
};
        
export const TextAreaComponent = ({control, name, placeholder}) => {
    const {field} = useController({
        control: control,
        name:name,
        placeholder:placeholder,
        defaultValue:""
    })
    return (
        <textarea {...field}
            placeholder={placeholder}
            required=""
            rows={5}
            style={{resize:"none"}}
        >
            
        </textarea>        
        
    )
}

