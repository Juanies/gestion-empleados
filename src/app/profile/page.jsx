import Button from '@/app/ui/optionslogin'
import Input from '@/app/ui/input'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className='flex flex-col gap-3'>
          <div>
            <span className='font-[600] text-xl'>Envision. Execute</span> <br />
            <span className='  text-[#CCCCCC]'>Crea tu cuenta en Salovate</span>
          </div>
        <div className='flex flex-col items-center justify-center gap-6'>
          <div className='flex flex-col gap-2'>
            <Button type="google"/>
            <Button type="apple"/>
          </div>
          <p>O continúa con tu correo electrónico</p>
          <div className='flex flex-col gap-2'>
            <Input type="username"/>
            <Input type="email"/>
            <Input type="password"/>
          </div>
        </div>
      </div>
    </main>
  );
}
