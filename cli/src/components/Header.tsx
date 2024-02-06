import React, { FC } from "react";

const Header:FC =()=> {
    const isAuth = truereturn(
        <header className="flex items-center justify-between bg-clate-800 panding 4 shadow-sm backdrop-blur-sm">
<Link to"/">
<FasBts sixe={28} />
</Link>
{isAuth && (
    <nav>
    <ul classNme="ml-auto mt-10 flex items-center gap-5">
    
    <li>
    <NavLink
     to={'/'} 
     className={({isActive}) => isActive & 'text-white': 'text-white/50 '}>
     </li>
     </NavLink>
    </li>




    <li>
    <NavLink to={'/'}>Home</NavLink>
    </li>

    <li>
    <NavLink to={'/categories'}className={({isActive}) => isActive & 'text-white': 'text-white/50 '}></li>>Categories</NavLink>
    </li>

   
    
    
    </ul>
    </nav>
)}



        </header>
    )
}