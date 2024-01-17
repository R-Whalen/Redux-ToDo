'use-client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <div className='flex flex-col justify-center items-center'>
            <hr className='w-full md:w-[80%] border-dark-600 dark:border-dark-200' />
            <footer className='flex justify-center items-center p-8 gap-2'>
                By Robert Whalen <a href='https://github.com/R-Whalen'><FontAwesomeIcon icon={faGithub} className='h-6 dark:text-white' /></a>
            </footer>
        </div>
    )
}

export default Footer;