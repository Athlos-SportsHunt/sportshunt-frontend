
const Navbar = class extends React.Component {
    render() {
        return (
            <nav style={styles.navbar}>
                <div style={styles.brand}>SportsHunt</div>
                <ul style={styles.navLinks}>
                    <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
                    <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
                    <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
                </ul>
            </nav>
        );
    }
}


const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff'
    },
    brand: {
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0
    },
    navItem: {
        marginLeft: '20px'
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none'
    }
};
