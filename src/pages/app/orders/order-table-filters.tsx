import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectGroup, SelectItem, SelectTrigger } from "@/components/ui/select";
import { SelectContent, SelectValue } from "@radix-ui/react-select";
import { Search, X } from "lucide-react";


export function OrdersTableFlters() {
  return (
    <>
      <form className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros:</span>
        <Input placeholder="ID do pedido" className="h-8 w-auto" />
        <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        <Select>
          <SelectTrigger className="h-8 w-[180px]" >
            <SelectValue   defaultValue='all' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
              <SelectItem value="delivering">Em entrega</SelectItem>
              <SelectItem value="processing">Em preparo</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button type="submit" variant='secondary' size='xs'>
          <Search className="mr-4 h-4 w-4" />
          Filtrar resultados
        </Button>
        <Button type="button" variant='outline' size='xs'>
          <X className="mr-4 h-4 w-4" />
          Remover filtros
        </Button>
      </form>
    </>
  )
}
