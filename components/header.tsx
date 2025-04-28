import Link from "next/link"

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center space-x-2">
      <Link href="/" className="flex items-center space-x-2">
        <div className="h-5 w-5 border border-white"></div>
        <span className="text-sm">devtask</span>
      </Link>
      <div className="text-sm">›</div>
      <div className="text-sm">{title}</div>
    </header>
  )
}
