import { BsArrowLeft} from "react-icons/bs";

const SamplePreviousArrow = (props: any) => {
    const {onClick} = props;
    return (
        <div 
        className="absolute bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-gray hover:border-transparent hover:text-gray cursor-pointer duration-300 z-10"
        onClick={onClick}
        >
            <BsArrowLeft />
        </div>
    );
};

export default SamplePreviousArrow;
