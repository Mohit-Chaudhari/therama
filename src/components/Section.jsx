import React from 'react';
import clsx from 'clsx';

const Section = ({
    children,
    className,
    id,
    background = 'white' // 'white', 'gray', 'primary'
}) => {
    const bgColors = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        primary: 'bg-primary-900 text-white',
    };

    return (
        <section
            id={id}
            className={clsx(
                'py-16 md:py-24',
                bgColors[background],
                className
            )}
        >
            <div className="container mx-auto px-6">
                {children}
            </div>
        </section>
    );
};

export default Section;
