const CardOne = ({
  image,
  title,
  price,
  highlights,
  acclimatization,
  successRate,
  isSuggestion,
}) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition overflow-hidden text-center rounded">
      {/* Image */}
      <img src={image} alt={title} className="h-44 w-full object-cover" />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl mb-4 leading-tight text-[#d87028]">{title}</h3>
        {isSuggestion ? (
          <p className="text-[14px] md:text-[16px]  mb-6 md:mb-10">
            Not sure which route suits you best? We recommend the most suitable
            option for you.
          </p>
        ) : (
          <>
            <div className=" space-y-1">
              <p className=" text-[14px] md:text-[16px]">Price: {price}</p>
              <p className="text-[14px] md:text-[16px] ">{highlights}</p>
              <p className="text-[14px] md:text-[16px] ">
                Acclimatization: {acclimatization}
              </p>
              <p className="text-[14px] md:text-[16px] ">
                Success Rate: {successRate}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardOne;
