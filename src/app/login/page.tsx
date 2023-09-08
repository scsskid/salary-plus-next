import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Login() {
	const supabase = await createServerComponentClient({ cookies });

	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session) {
		redirect('/');
	}

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
