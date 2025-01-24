import React ,{useState} from 'react';




const Checkbox= () => {
    const [isChecked, setisChecked] = useState(false);
    let handlecheckbox = (event)=>{
        setisChecked(event.target.isChecked)
    }


    return (
        <div>
        
        </div>
    );
}

export default Checkbox;


