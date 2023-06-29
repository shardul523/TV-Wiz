import { Link } from 'react-router-dom';

const Navigation = () => {
    const LINKS = [
        { title: 'Home', link: '/' },
        { title: 'Starred', link: '/starred' },
    ];

    return (
        <nav>
            <ul>
                {LINKS.map(item => (
                    <li key={item.link}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
