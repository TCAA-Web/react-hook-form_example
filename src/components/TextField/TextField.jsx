
export const TextField = (props) => {
    return (
        <>
            <input type={props.type} placeholder={props.placeholder} {...props.register(props.name, {required: true, minLength: 2})} />
            {props.errors[props.name]?.type == "required" && <span>{props.name} is required</span>}
            {props.errors[props.name]?.type == "minLength" && <span>{props.name} has to be longer</span>}
        </>
    )
}