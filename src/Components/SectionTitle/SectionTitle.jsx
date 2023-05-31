
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 text-center mx-auto my-8">
            <p className="text-yellow-600 font-serif text-">--- {subHeading} ---</p>
            <h3 className="text-4xl uppercase border-y-4 p-4 mt-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;