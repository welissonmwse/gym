import { Dumbbell } from 'lucide-react'
export function Header() {
  return (
    <header className="flex items-center justify-center p-4">
      <h1 className="flex items-center gap-2 uppercase text-4xl font-bold tracking-widest">
        <Dumbbell size={28} className="text-primary" />ws {' '}
        <span className="text-primary">gym</span>
      </h1>
    </header>
  )
}
