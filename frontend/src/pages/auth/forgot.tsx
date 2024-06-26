import { ForgotForm } from './components/forgot-form'
import LogoDiscreteSvg from '@/assets/logo-discrete.svg'
import ThemeSwitch from '@/components/theme-switch'
import { Card } from '@/components/ui/card'
import { BRANDING_APPLICATION_TITLE } from '@/data/branding-strings'
import { Link } from 'react-router-dom'

export default function Forgot() {
  return (
    <>
      <div className='absolute right-3 top-3 ml-auto flex items-center space-x-4'>
        <ThemeSwitch />
      </div>

      <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
          <div className='mb-4 flex items-center justify-center'>
            <img src={LogoDiscreteSvg} alt='Logo' className='mr-2' />
            <h1 className='text-xl font-medium'>
              {BRANDING_APPLICATION_TITLE}
            </h1>
          </div>
          <Card className='p-6'>
            <div className='mb-2 flex flex-col space-y-2 text-left'>
              <h1 className='text-md font-semibold tracking-tight'>
                Forgot Password
              </h1>
              <p className='text-sm text-muted-foreground'>
                Enter your registered email and <br /> we will send you a link
                to reset your password.
              </p>
            </div>
            <ForgotForm />
            <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
              Don&apos;t have an account?{' '}
              <Link
                to='/auth/sign-up'
                className='underline underline-offset-4 hover:text-primary'
              >
                Sign up
              </Link>
              .
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}
