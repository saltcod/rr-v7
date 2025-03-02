import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="max-w-container mx-auto mt-32 w-full px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10 flex items-center justify-center text-sm">
        <Link to="https://supabase.com">Powered by Supabase</Link>
      </div>
    </footer>
  )
}
