import { ResetForm } from './components/reset-form'
import LogoDiscreteSvg from '@/assets/logo-discrete.svg'
import { Card } from '@/components/ui/card'
import { BRANDING_APPLICATION_TITLE } from '@/data/branding-strings'
import { Link } from 'react-router-dom'

export default function Reset() {
  return (
    <>
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
                Reset Password
              </h1>
              <p className='text-sm text-muted-foreground'>
                Enter the new password to reset it.
              </p>
            </div>
            <ResetForm />
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