import style from '../header/header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header>
                <h1>PILOTOS DE DRIFT</h1>
                <section id={style['link-container']}>
                    <h2><Link to='/'> Todos </Link></h2>
                    <h2><Link to='/formulaD'> Formula Drift </Link></h2>
                    <h2><Link to='/ultimateD'> Ultimate Drift </Link></h2>
                    <h2><Link to='/Dmaster'> Drift Masters</Link></h2>
                </section>
            </header>


        </>
    )
}

export default Header