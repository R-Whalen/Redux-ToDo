import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const button = classNames(
        'flex',
        'items-center',
        'justify-center',
        'w-6',
        'h-6',
        'text-dark',
        'bg-white',
        'dark:bg-mixed-200',
        'rounded-full',
        'transform',
        theme === 'light' ? 'translate-x-0' : 'translate-x-5',
        'transition-transform',
        'duration-500',
        'ease-in-out'
    );

    return (
        <div
            className='relative w-14 h-8 rounded-full p-1 cursor-pointer bg-white dark:bg-mixed-200 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]'
            onClick={toggleTheme}
        >
            <button className={button}>
                {theme === 'light'
                    ? <FontAwesomeIcon icon={faSun} style={{ color: 'black', height: '1.25rem' }} />
                    : <FontAwesomeIcon icon={faMoon} style={{ color: 'white', height: '1.25rem' }} />
                }
            </button>
        </div>
    )
}

export default ToggleTheme;