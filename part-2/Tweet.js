
const Tweet = ({ username, name, date, message }) => {
    return (
        <div className="tweet-container">
            <p>
                <span className="username">Username: {username}</span>
                <span className="name">Name: {name}</span>
                <span className="date">Date: {date}</span>
            </p>
            <p className="message">Tweet: {message}</p>
        </div>
    )
}
