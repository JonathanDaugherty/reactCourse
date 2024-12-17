

function Food () { 
    
        const food1 = "chicken"
        const food2 = "steak"
        
        return (
            <ul>
                <li>Salmon</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
        );
}

export default Food