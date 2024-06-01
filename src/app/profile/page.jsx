import Button from '@/app/ui/buttons'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-2 p-24">
      <div className='flex flex-col gap-2'>
        <Button type="google"/>
        <Button type="apple"/>
      </div>

    </main>
  );
}
