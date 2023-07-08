import { Link } from 'react-router-dom';

import { NavList, StyledNavLink } from './styles/Navigation.styled';

const Navigation = () => {
    const LINKS = [
        { title: 'Home', link: '/' },
        { title: 'Starred', link: '/starred' },
    ];

    return (
        <nav>
            <NavList>
                {LINKS.map(item => (
                    <li key={item.link}>
                        <StyledNavLink to={item.link}>
                            {item.title}
                        </StyledNavLink>
                    </li>
                ))}
            </NavList>
        </nav>
    );
};

export default Navigation;
