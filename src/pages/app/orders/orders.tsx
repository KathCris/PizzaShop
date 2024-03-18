import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { useEffect } from "react";



export function Orders() {
  return (
    <>
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
    </div>

    <div className="space-y-2.5">
      <form className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros:</span>
        <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[64px]" ></TableHead>
            <TableRow className="w-[140px]">Identificador</TableRow>
            <TableRow className="w-[180px]">Realizado há</TableRow>
            <TableRow className="w-[140px]">Status</TableRow>
            <TableRow>Cliente</TableRow>
            <TableRow className="w-[140px]">Total de pedido</TableRow>
            <TableRow className="w-[164px]"></TableRow>
            <TableRow className="w-[132px]"></TableRow>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Button variant="outline" size='xs'>
                <Search className="h-3 w-3" />
              </Button>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
              65256sdf5dfs
            </TableCell>
            <TableCell className="text-muted-foreground">
                  Há 15 minutos
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400"/>
                <span className="font-medium text-muted-foreground">Pendente</span>
              </div>
            </TableCell>
            <TableCell className="font-medium">
              Kathleen Santos
            </TableCell>
            <TableCell className="font-medium">
              R$ 149,90
            </TableCell>
            <TableCell>
              <Button variant='outline' size='xs'> <ArrowRight className="mr-2 h-3 w-3" /> Aprovar</Button>
            </TableCell>
            <TableCell>
              <Button variant='ghost' size='xs'><X  className="mr-2 h-3 w-3"/> Cancelar</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    </>
  )
}
