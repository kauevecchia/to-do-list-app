import logo from '../assets/logo.svg'

export function Header() {
    return (
        <header className='w-full bg-gray-700 h-48 flex flex-col items-center justify-center'>
            <img src={logo} alt="" />
        </header>
    )
}