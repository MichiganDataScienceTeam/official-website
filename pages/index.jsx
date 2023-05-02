import NavBar from '@/components/navBar';
import Wave from '@/components/wave';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main className={`pt-48 pb-4`}>
        <div className='text-center'>
          <h1 className='mb-5 text-7xl'>Michigan Data Science Team</h1>
          <p className='mb-10 text-2xl'>
            The premier AI club at The University of Michigan
          </p>
          <div className='flex justify-center gap-5'>
            <Link
              className='border-2 rounded-full p-4 hover:-translate-y-1'
              href=''
            >
              Join Us
            </Link>
            <Link
              className='border-2 rounded-full p-4 hover:-translate-y-1'
              href=''
            >
              Work With Us
            </Link>
          </div>
          <Wave></Wave>
        </div>
        <div className='dark:bg-blue-800 p-4'>
          <div className='container m-auto'>
            <h2 className='text-xl text-center mb-4'>WELCOME!</h2>
            <p>
              MDST is the leading practical data science and machine learning
              club at the University of Michigan, with over 200 active members
              working together on a range of projects each semester. We are
              dedicated to educating about the applications of data science and
              ML, while providing opportunities for members' professional,
              academic, and career development. This means we work on projects,
              hold workshops, host corporate tech talks, and also have a couple
              of social events throughout the semester.
            </p>
            <p>
              Project signups are now closed for the W23 semester! Check back
              here at the start of next semester to see how to join in FA23.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
