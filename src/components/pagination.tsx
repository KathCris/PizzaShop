import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "./ui/button"

export interface PaginationProps {
  index: number
  totalCountPage: number
  perPage: number
}

export function Pagination ({index, totalCountPage, perPage}: PaginationProps) {
  const pages = Math.ceil(totalCountPage / perPage) || 1 
  return (
    <div className="flex justify-between p-4 border rounded-md">
      <div className="flex items-center justify-between">
        <span>
          Total de {totalCountPage} item(s)
        </span>
      </div>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {index + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant='outline' className="h-8 w-8 p-0">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant='outline' className="h-8 w-8 p-0">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button variant='outline' className="h-8 w-8 p-0">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Proxima página</span>
          </Button>
          <Button variant='outline' className="h-8 w-8 p-0">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}