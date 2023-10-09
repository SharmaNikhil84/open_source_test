import {useState} from 'react'
function Counter({name}){
    const [k,setK]=useState(true)
    function check(){
        setK(!k);
    }
    return(
        <>
        
            <button onClick={check} name={name}>{k? '▶':'⏸️'}</button>
        </>
        
    )
}

export default Counter;