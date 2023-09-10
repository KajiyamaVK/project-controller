'useclient'
import { HeaderToggle } from './HeaderToggle'
import { Logo } from './Logo'
import { FullstackerLogo } from './fullstackerLogo'

export function Header() {
  return (
    <nav className="navbar flex items-center justify-center w-full relative z-10">
      <div className="px-5 py-2 w-full flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-10">
          <HeaderToggle />
          <FullstackerLogo />
        </div>
      </div>
    </nav>
  )
}
