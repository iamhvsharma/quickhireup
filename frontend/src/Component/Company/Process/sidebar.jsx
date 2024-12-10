import { Circle } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="bg-black text-white p-6 space-y-4 min-h-screen">
      <div className="text-2xl font-bold">QuickHireUp</div>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <Circle className="w-4 h-4" />
          <span>Set up your account</span>
        </li>
        <li className="flex items-center space-x-2">
          <Circle className="w-4 h-4" />
          <span>Invite your team</span>
        </li>
        <li className="flex items-center space-x-2">
          <Circle className="w-4 h-4" />
          <span>Start recruiting</span>
        </li>
      </ul>
    </div>
  )
}

