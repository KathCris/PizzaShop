import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";
import { AccountMenu } from "./account-meun";

export function Header() {
  return (
    <>
    <div className='border-b'>
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex w-full justify-between">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <NavLink to='/'>
              <Home className="h-4 w-4" />
              Home
            </NavLink>
            <NavLink to='/orders'>
              <UtensilsCrossed className="h-4 w-4" />
              Pedidos
            </NavLink>
          </div>

          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle /> 
            </div>
            <div className="ml-auto flex items-center gap-2">
              <AccountMenu /> 
            </div>
          </div>
        </nav>

      </div>
    </div>
    </>
  )
}
