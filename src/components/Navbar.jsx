import React from 'react'

const Navbar = () => {
  const mystyle={
    color: 'white',
    height: '65px',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Playfair Display", serif', // Corrected this line
    fontWeight: '400',
    fontStyle: 'normal',
  };
  return (
    <div>
      <nav className="navbar bg-dark nav" data-bs-theme="dark" style={mystyle}>
      GoalSetter - Track & Achieve
    </nav>
    </div>
  )
}

export default Navbar
