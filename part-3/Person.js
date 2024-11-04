const Person = ({ name, age, hobbies }) => {
    let msg;
    if (age > 18) {
        msg = "please go vote"
    } else {
        msg = "you must be 18"
    }

    const displayName = name.length > 8 ? name.slice(0, 6) : name;

    return (
        <div className="person">
            <p>Learn some information about this person:</p>
            <h2>Name: {displayName}</h2>
            <h3>Age: {age}</h3>
            <h3>message: {msg}</h3>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>

        </div>
    );
}