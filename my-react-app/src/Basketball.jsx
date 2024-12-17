

function Players () {
    const players = ["Lebron", "Kobe", "Curry"];
    const handleClick = (player) => {
        if(player === "Lebron") {
            alert('Lebron plays for the Lakers');
        }
    }
    return (
        <ul>
            {players.map((player) => (
                <li onClick={() => handleClick(player)}><a href="#">{player}</a></li>
            ))}
        </ul>
    );
}

export default Players