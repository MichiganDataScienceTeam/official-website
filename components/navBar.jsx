export default function NavBar() {
  return (
    <header className='fixed flex justify-between flex-row w-full items-center p-8'>
      <a href=''>MDST</a>
      <nav className=''>
        <ul className='flex flex-row gap-6'>
          <li>Home</li>
          <li>Agenda</li>
          <li>Projects</li>
          <li>Tutorials</li>
          <li>Resources</li>
          <li>Team</li>
          <li>Join</li>
          <li>Sponsor</li>
        </ul>
      </nav>
    </header>
  );
}
