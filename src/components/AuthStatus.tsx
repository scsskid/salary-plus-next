import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AuthStatus() {
	const supabase = createServerComponentClient({ cookies });

	const session = await supabase.auth.getSession();
	const { data } = await supabase.auth.getUser();

	// console.log({ session, data });

	return (
		data.user && (
			<>
				<p>
					<span>Hi {data.user.email}</span>
				</p>
				<form action="/auth/logout" method="post">
					<button className="ui-btn" type="submit">
						Logout Form Action
					</button>
				</form>
			</>
		)
	);
}
