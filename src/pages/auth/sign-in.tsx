import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner'


import { useForm } from 'react-hook-form';
import { z } from 'zod'

const signInForm = z.object({
  email: z.string().email()
})

type typeSignInForm = z.infer<typeof signInForm>


export function SignIn() {
  const {register, handleSubmit} = useForm<typeSignInForm>()

  function handleSignIn (data: typeSignInForm) {
    console.log('data', data)

    toast.success('Enviamos um link de autenticação para seu e-mail.')
  }

  return (
    <>
    <div className="p-8">
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>


        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <Button className="w-full" type="submit">Acessar painel</Button>
        </form>
      </div>
    </div>
    </>
  )
}
