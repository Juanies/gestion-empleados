import Button from '@/app/ui/optionslogin'
import Input from '@/app/ui/input'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-24">
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
    </main>
  );
}
