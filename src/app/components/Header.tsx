'use-client';

import classNames from "classnames";

const TopBar = () => {
    const styling = classNames(
        'flex',
        'justify-end',
        'items-center',
        'border-b-1',
        'border-color-blue-500',
        'h-16',
        'p-6'
    );

    return <header className={styling}>
        <button>
            this
        </button>
    </header>
}

export default TopBar;