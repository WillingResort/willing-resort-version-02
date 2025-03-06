import React from 'react'
interface HeadingProps {
    title: string;
}

const HeadingText: React.FC<HeadingProps> = ({ title }) => {
    return (
        <h1 className="font-normal w-[100%] sm:w-[50%] text-heading tracking-heading text-secondaryColor uppercase text-center">
            {title}
        </h1>
    )
}

export default HeadingText