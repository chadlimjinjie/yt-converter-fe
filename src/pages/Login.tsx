
export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form action="/login" method="POST">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}