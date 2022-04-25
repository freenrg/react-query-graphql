import { useState } from "react";

function Dropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const options = ["D1", "TI"];

    return (
        <div className='dropdown'>
            <div
                className='dropdown-btn'
                onClick={() => setIsActive(!isActive)}
            >
                {selected}
                <span className='fa-solid fa-caret-down'></span>
            </div>
            {isActive && (
                <div className='dropdown-content'>
                    {options.map(option => (
                        <div
                            key={option}
                            className='dropdown-item'
                            onClick={e => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
