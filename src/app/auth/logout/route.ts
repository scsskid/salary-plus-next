import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { Database } from '@/types/database.types';
import { revalidatePath } from 'next/cache';

export async function GET(request: Request) {
	console.log('GET /auth/logout');

	const requestUrl = new URL(request.url);
	const supabase = createRouteHandlerClient<Database>({ cookies });

	// Check if we have a session
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session) {
		console.log('No session found');
	}

	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error(error);
	}

	revalidatePath('/');

	return NextResponse.redirect(`${requestUrl.origin}/`, {
		status: 302,
	});
}
