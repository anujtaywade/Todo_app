import React ,{useState} from 'react';




const Checkbox= () => {
    const [isChecked, setisChecked] = useState(false);
    let handlecheckbox = (event)=>{
        setisChecked(event.target.isChecked)
    }


    return (
        <div>
            <input type="checkbox" 
            onChange={handlecheckbox}
            checked={isChecked}/>
        </div>
    );
}

export default Checkbox;


