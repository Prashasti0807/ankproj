"use client"

import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link href="https://www.atg.world/">
                        <button typeof="button" className="navbar-brand btn btn-light text-dark">
                            Across The Globe
                        </button>
                    </Link>

                    <button type="button" className="btn btn-light">
                    <i className="bi bi-box-arrow-in-right">Login</i>
                    </button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;