// El componente <Suspense> de React se utiliza para manejar el estado de carga de un componente diferido o perezoso (lazy-loaded). 
//Permite mostrar una interfaz de carga mientras se espera la carga del componente y evitar la representación parcial del mismo antes de que se cargue por completo.
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../assets/react.svg'
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" style={{ marginTop: '30px' }} />
                        <ul>
                            {routes.map(({ name, to }) => (
                                <li key={to}>
                                    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    <Routes>
                        {routes.map(({ path, Component }) => (
                            <Route
                                key={path}
                                path={path}
                                element={<Component />}
                            />
                        ))}


                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}