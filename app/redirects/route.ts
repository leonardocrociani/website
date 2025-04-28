import { NextRequest, NextResponse } from 'next/server';
import { redirectsMap } from '@/constants/redirects_map';
import { redirect } from 'next/navigation';

export const GET = async (request: NextRequest) => {
    const { searchParams } = new URL(request.url);
    const redirectKey = searchParams.get('key');
    const redirectUrl = redirectsMap[redirectKey as string];
    if (redirectUrl) {
        return redirect(redirectUrl);
    } else {
        return NextResponse.json({
            error: 'Invalid redirect key',
        }, {
            status: 400,
        });
    }
}