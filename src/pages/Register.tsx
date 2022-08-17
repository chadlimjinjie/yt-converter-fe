
export const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form action="/register" method="POST">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}