import Link from "next/link";

export default function navbar() {

return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="/">
          BlogsBlog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active" id="nav1">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item" id="nav">
              <Link className="nav-link" href="/blogs/3">
                Blogs
              </Link>
            </li>
            <li className="nav-item" id="nav">
              <Link className="nav-link" href="/author/">
                Authors
              </Link>
            </li>
          </ul>
        </div>
      </nav>
)
}