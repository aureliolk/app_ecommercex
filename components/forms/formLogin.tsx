import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Router from 'next/router';

const schema = z.object({
  name: z.string().min(1, { message: 'Requerido' }),
  email: z.string().min(1, {message: "Requerido"})
});

export const FormLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = handleSubmit(data => {
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: data.name,
        email: data.email
       }),
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  })

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <input className='py-2 px-6 rounded' {...register('name')} placeholder="Nome" />
      {errors.name?.message && <p className='text-xs text-red-500'>{errors.name?.message as any}</p>}
      <input className='py-2 px-6 rounded' {...register('email')} placeholder="Email" />
      {errors.email?.message && <p className='text-xs text-red-500'>{errors.email?.message as any}</p>}
      <input className='py-2 px-6 border-gray-400 border rounded cursor-pointer' type="submit" value={"Enviar"} />
    </form>
  );
}