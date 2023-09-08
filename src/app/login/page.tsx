export default function Login() {
	return (
		<form action="/auth/login" method="post">
			<label htmlFor="email">Email</label>
			<input name="email" />
			<label htmlFor="password">Password</label>
			<input type="password" name="password" />
			<div>
				<button className="ui-btn">Sign In</button>
				<button className="ui-btn" formAction="/auth/sign-up">
					Sign Up
				</button>
			</div>
		</form>
	);
}
