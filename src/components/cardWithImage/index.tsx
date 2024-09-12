import Image from "next/image";

type CardWithImageI = {
  isImageOnRight: boolean;
  contentSvg: any;
  title: string;
  description: string;
  extendedDescription?: string;
  isShowMoreActive?: boolean;
  handleShowMoreOLess?: () => void;
};

export function CardWithImage({
  isImageOnRight,
  contentSvg,
  title,
  description,
  extendedDescription,
  isShowMoreActive,
  handleShowMoreOLess,
}: CardWithImageI) {
  return (
    <div>
      <Image
        className="rounded-lg w-[400px] h-[500px] sm:block lg:hidden "
        src={contentSvg}
        alt="i"
      />

      <div className="flex justify-between">
        {!isImageOnRight ? (
          <Image
            className="rounded-lg w-[400px] h-[500px] sm:hidden lg:block"
            src={contentSvg}
            alt="i"
          />
        ) : null}
        <div
          className={`sm:[20px] lg:w-[505px] flex flex-col py-8  ${
            isImageOnRight
              ? "items-start justify-start"
              : "items-start justify-start"
          }`}
        >
          <div className="text-darkBlue-800">
            <h2 className="text-[40px]">{title}</h2>
          </div>
          <div className=" py-4">
            <h2 className="text-[20px]">{description}</h2>
            {extendedDescription ? (
              <div
                onClick={handleShowMoreOLess}
                className="text-darkBlue-300 underline cursor-pointer pt-2"
              >
                <h2>{isShowMoreActive ? "Hide" : "Show more"}</h2>
              </div>
            ) : null}
          </div>
          {isShowMoreActive ? (
            <div className="text-gray-700 ">
              <h2>{extendedDescription}</h2>
            </div>
          ) : null}
        </div>
        {isImageOnRight ? (
          <Image
            className="rounded-lg w-[400px] h-[500px] sm:hidden lg:block"
            src={contentSvg}
            alt="i"
          />
        ) : null}
      </div>
    </div>
  );
}
