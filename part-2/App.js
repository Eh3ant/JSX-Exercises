
const App = () => {
    return (
        <div>
            <Tweet username="username1" name="user1" date="Nov5" message="This is a tweet from user 1" />
            <Tweet username="username2" name="user2" date="Nov5" message="This is a tweet from user 2" />
            <Tweet username="username3" name="user3" date="Nov5" message="This is a tweet from user 3" />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))