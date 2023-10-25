import { forwardRef } from "react";

export const InputLogin = forwardRef(({ Label, id, ...rest }, ref) => {
    return (
        <div>
            <label htmlFor={id}>{Label}</label>
            <input ref={ref} {...rest} />
        </div>
    );
});