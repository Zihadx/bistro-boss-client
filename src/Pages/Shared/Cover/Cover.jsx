import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[700px]"
      >
        <div className="hero-content text-center text-neutral-content bg-black bg-opacity-50 w-3/4 p-16 flex flex-col items-center justify-center">
          <div className="max-w-md ">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-xs uppercase">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
