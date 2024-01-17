'use-client';

import ToggleTheme from "./ToggleTheme";

const TopBar = () => {

    return <header className='flex justify-end items-center border-b-1 border-b-dark-600 shadow-md h-32 md:h-16 p-8'>
        <ToggleTheme />
    </header>
}

export default TopBar;