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
              `border-primary-blue text-[16px] ${
                isActive
                  ? 'text-primary-yellow font-bold'
                  : 'text-primary-blue font-normal'
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
