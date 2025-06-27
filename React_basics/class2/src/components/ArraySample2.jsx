
import PropTypes from "prop-types";
export const ArraySample2 = (prop) => {
   const {items} = prop;
    return (
        <div>
            <h3>ArraySample2</h3>
            <ul>
                {items.map((item) => (
                    <li key = {item.key}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
