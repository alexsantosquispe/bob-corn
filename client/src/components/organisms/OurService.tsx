import { ArrowDownTop } from '../atoms/ArrowDownTop';
import { ArrowTopDown } from '../atoms/ArrowTopDown';

export const OurService = () => {
  return (
    <div className="flex w-full justify-center py-20">
      <article className="flex flex-col justify-center gap-6 px-[1.125rem]">
        <img
          src="/img/qa-engineers.png"
          className="h-[14.625rem] w-[16.875rem]"
        />
        <div className="flex max-w-[19.0625rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-[1.1875rem] font-semibold">Quality assurance</h2>
          <p className="leading-[1.875rem]">
            Lorem ipsum dolor sit amet consectetur. Id eget condimentum
            elementum
          </p>
        </div>
      </article>
      <ArrowTopDown className="mt-20" />
      <article className="flex flex-col justify-center gap-6 px-[1.125rem]">
        <img src="/img/delivery.png" className="h-[14.625rem] w-[16.875rem]" />
        <div className="flex max-w-[19.0625rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-[1.1875rem] font-semibold">
            Delivery from 2-4 hour
          </h2>
          <p className="leading-[1.875rem]">
            Lorem ipsum dolor sit amet consectetur. Id eget condimentum
            elementum
          </p>
        </div>
      </article>
      <ArrowDownTop className="mt-30" />
      <article className="flex flex-col justify-center gap-6 px-[1.125rem]">
        <img
          src="/img/payment-product.png"
          className="h-[14.625rem] w-[16.875rem]"
        />
        <div className="flex max-w-[19.0625rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-[1.1875rem] font-semibold">
            Pay after receiving products
          </h2>
          <p className="leading-[1.875rem]">
            Lorem ipsum dolor sit amet consectetur. Id eget condimentum
            elementum
          </p>
        </div>
      </article>
    </div>
  );
};
