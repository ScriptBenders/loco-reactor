import { IconLoader } from '@tabler/icons-react'

export default function Loader() {
  return (
    <div className='xxh-svh flex w-full items-center justify-center'>
      <IconLoader className='animate-spin' size={32} />
      <span className='sr-only'>loading</span>
    </div>
  )
}
