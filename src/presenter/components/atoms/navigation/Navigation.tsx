import { Navlinks } from '../../../assets/index';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
  linkClassName?: string;
  activeLinkClassName?: string;
  isColumn?: boolean;
}

export default function Navigation({ linkClassName = '', activeLinkClassName = '', isColumn = false }: NavigationProps) {
  return (
    <nav className={` ${isColumn ? 'w-full' : ''}`}>
      <ul className={`flex ${isColumn ? 'flex-col text-center' : 'flex-row'}`}>
        {Navlinks.map((link) => (
          <NavLink
            key={link.id}
            to={`/${link.id === 'home' ? '' : link.id}`}
            className={({ isActive }) =>
              `${linkClassName} ${isActive ? activeLinkClassName : ''}
               ${isColumn ? 'contact border-b px-[20px] w-fullpx-[20px] flex justify-center items-center h-[65px] border-gray-500 ' :
               `${link.id !== 'contact' ? 'border-r px-[20px]' : 'pl-[20px]'
               }`
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}