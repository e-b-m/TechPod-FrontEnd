const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        TechPod
      </a>
      <ul>
        <li>
          <a href="/about">About</a>
          <a href="/community">Community</a>
          <a href="/jobs">Jobs</a>
          <a href="/events">Events</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
