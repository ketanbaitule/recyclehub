import RegisterForm from './RegisterForm'
import { signup } from '@/actions/auth'

export default function Register(){

    return(
        <>
            <section id="Register" className='mt-10'>
                <form action={signup} className=' max-w-md mx-auto flex flex-col gap-5'>
                    <RegisterForm />
                </form>
            </section>
        </>
    )
}