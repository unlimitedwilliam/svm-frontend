import React, { useImperativeHandle, useState } from 'react';
import { CheckBoxProps } from './authority.props';
import { BsCircle, BsCheckCircleFill } from 'react-icons/bs';

const CustomCheckBox = React.forwardRef((props: CheckBoxProps, ref: any) => {

    const {label, checkRef} = props;
    const [checked, setChecked] = useState<boolean>(false);
    const handleIconClick = (e: any) => {
        setChecked(!checked);
    } 

    useImperativeHandle(ref, () => ({
        returnChecked: () => checked? label : '',
        resetChecked: () => setChecked(false)
    }))

    return (
        <div className='container'>
            <button ref={checkRef} className='check-bt' onClick={handleIconClick} id={label}>
                {checked? <BsCheckCircleFill color='#0A9BE1' size='15px'/> : <BsCircle size='15px'/>}
            </button>
            <span>{label}</span>
        </div>
    )
})

export default CustomCheckBox