import React, { useState } from 'react';

interface TextBoxProps {

    label: string;

    changeHandler: (value: string) => void;

}

export function TextBox(props: TextBoxProps) {
    
    return (

        <div>

            <label>{props.label}</label>

        
            <input type="text" onChange={e => props.changeHandler(e.target.value)}></input>
            
        </div>
    );
}