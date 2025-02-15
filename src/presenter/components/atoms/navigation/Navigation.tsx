import { Navlinks } from '../../../assets/index';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex">
        {Navlinks.map((link) => (
          <NavLink
            key={link.id}
            to={`/${link.id === 'home' ? '' : link.id}`}
            className={({ isActive }) =>
              `border-opacity-20 text-[16px] ${
                isActive
                  ? 'text-primary-red font-semibold'
                  : 'text-primary-blue font-semibold'
              } ${link.id !== 'contact' ? 'border-r px-[20px]' : 'pl-[20px]'}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
