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
        'rounded-full',
        'transform',
        theme === 'light' ? 'translate-x-0' : 'translate-x-6',
        'transition-transform',
        'duration-500',
        'ease-in-out'
    );

    return (
        <div className='relative w-14 h-8 rounded-full p-1 cursor-pointer bg-mixed-400 dark:bg-mixed-200' onClick={toggleTheme}>
            <button className={button}>
                {theme === 'light'
                    ? <FontAwesomeIcon icon={faSun} style={{ color: 'yellow' }} />
                    : <FontAwesomeIcon icon={faMoon} style={{ color: 'white' }} />
                }
            </button>
        </div>
    )
}

export default ToggleTheme;