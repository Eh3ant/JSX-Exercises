const App = () => {
    return (
        <div>
            <Person name="Ehsan" age={31} hobbies={['watching football', 'code', 'drink coffee']} />
            <Person name="Joe" age={15} hobbies={['watching MMA', 'fighting', 'drink tea']} />
            <Person name="Dav" age={50} hobbies={['swimming', 'cars', 'smoking']} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))