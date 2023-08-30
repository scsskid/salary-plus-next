import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	console.log(request.body);

	return NextResponse.json({
		status: 200,
		body: { message: 'Hello, world!' },
	});
}

export async function GET(request: NextRequest) {
	console.log(request.body);

	return NextResponse.json({
		status: 200,
		body: { message: 'Hello, world!' },
	});
}
