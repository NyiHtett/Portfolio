import React, {useState} from 'react';

function Rate(){
    const [count, setCount ] = useState(0);
    const [text, setText ] = useState('');

    const increment = () => {
        setCount(count + 1);
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    return(
        <div>
            <p > Rate: {count}</p>
            <button onClick={increment}> Give me some rating by tappin'</button>

            <input type = "text" value = {text} onChange = {handleTextChange} />
            <p> Reversed Text: {text.split(' y').reverse().join(' ')}</p>

        </div>
    );
}

export default Rate;