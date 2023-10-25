import { forwardRef } from "react";

export const InputRecord = forwardRef(({ Label, id, ...rest }, ref) => {
    return (
        <div>
            <label htmlFor={id}>{Label}</label>
            <input ref={ref} {...rest}/>
        </div>
    );
});