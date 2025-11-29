import React, { useState } from 'react'

function Cell(props) {

    // set up state to manage the cell's current value
    const [currentValue, setCurrentValue] = useState(props.value); 
   
    // determine if the cell is on the right or bottom edge of a 3x3 box for styling
    const isRightEdge = (props.colIndex + 1) % 3 === 0 && props.colIndex !== 8;
    const isBottomEdge = (props.rowIndex + 1) % 3 === 0 && props.rowIndex !== 8;
  
    // Build the className string
    let className = 'square';
    if (isRightEdge) className += ' border-right';
    if (isBottomEdge) className += ' border-bottom';

    const isEditable = props.value === 0;

    const handleChange = (event) => {
        let newValue = event.target.value;
        
        // Basic validation: only allow 1-9 or an empty string for deletion
        if (newValue === '' || /^[1-9]$/.test(newValue)) {
            // 1. Update the local state
            setCurrentValue(newValue === '' ? 0 : parseInt(newValue));
            
            // 2. IMPORTANT: Communicate the change up to the parent/board component
            props.onValueChange(props.rowIndex, props.colIndex, newValue === '' ? 0 : parseInt(newValue));
        }
    };

    return (
        <div className={className}>
            {isEditable ? (
                <input
                    type="number"
                    value={currentValue === 0 ? '' : currentValue} // Display empty string if value is 0
                    onChange={handleChange}
                    className="cell-input"
                    min="1"
                    max="9"
                />
            ) : (
                // Render the fixed value if the cell is not editable
                currentValue
            )}
        </div>
    );
}

export default Cell

