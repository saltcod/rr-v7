import type { ActionFunctionArgs } from 'react-router'
import { redirect } from 'react-router'
import { createClient } from '~/lib/supabase.server'

export const loader = async ({ request }: ActionFunctionArgs) => {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const redirectTo = url.searchParams.get('redirect_to') || '/'

  if (!code) {
    return new Response('Authentication failed: No code provided', {
      status: 400,
    })
  }

  const { supabase, headers } = createClient(request)
  const { error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    return redirect('/sign-in')
  }

  return redirect(redirectTo, {
    headers,
  })
}
