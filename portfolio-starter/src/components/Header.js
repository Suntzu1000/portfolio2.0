import React from 'react';


const Header = () => {
  return <header className='bg-gradient-to-r from-red-400 to-red-700 ' >
    <div className="container mx-auto">
      <div className='flex justify-between items-center ' >
        <a href="home" >
          <h1 className='text-5xl font-bold  ' >Portfólio</h1>
        </a>
        <button className='btn btn-sm' >Contrate-me</button>
      </div>
    </div>
  </header>;
};

export default Header;
