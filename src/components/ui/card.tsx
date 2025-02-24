import Image from "next/image";

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="flex flex-col gap-2">
            <Image
                className="h-[400px] w-full object-cover object-bottom"
                src={imageSrc}
                alt={title}
                width={800}
                height={500}
            />
            <h2 className="font-normal pt-4 px-4 text-secondaryColor uppercase" style={{ fontWeight: 600 }}>
                {title}
            </h2>
            <p className="px-4">{description}</p>
        </div>
    );
};

export default Card;
