const CardTwo = ({ image, title }) => {
    return (
        <div className="bg-white shadow-md hover:shadow-lg transition overflow-hidden text-center rounded">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="h-44 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4">
                <h3 className="text-xl mb-4 leading-tight text-[#d87028]">{title}</h3>
            </div>
        </div>
    );
};

export default CardTwo;
