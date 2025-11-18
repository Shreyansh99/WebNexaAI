import { NextResponse } from 'next/server';
import { supabase } from '@/src/lib/supabaseClient';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const { error } = await supabase
      .from('newsletter_subscribers')
      .upsert({ email }, { onConflict: 'email' });

    if (error) {
      return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Malformed request' }, { status: 400 });
  }
}