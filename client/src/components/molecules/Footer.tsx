import { AppleIcon } from '../../icons/AppleIcon';
import { PlayStoreIcon } from '../../icons/PlayStoreIcon';
import { AppButton } from '../atoms/AppButton';

const ColumnTitle = ({ title }: { title: string }) => {
  return (
    <span className="text-[1.0625rem] leading-6 font-medium">{title}</span>
  );
};

export const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-gray-200">
      <div className="flex w-[82.5rem] justify-between p-[3.1875rem]">
        <div className="flex flex-col gap-[1.25rem]">
          <ColumnTitle title="Download our app" />
          <div className="flex flex-col gap-y-[0.625rem]">
            <AppButton
              title="App Store"
              icon={
                <AppleIcon className="h-[1.875rem] w-[1.875rem] text-white" />
              }
            />
            <AppButton
              title="Google Play"
              icon={
                <PlayStoreIcon className="h-[1.875rem] w-[1.875rem] text-white" />
              }
            />
          </div>
        </div>

        <div>
          <ColumnTitle title="Need help" />
        </div>

        <div>
          <ColumnTitle title="Customer" />
        </div>

        <div>
          <ColumnTitle title="Information" />
        </div>
      </div>
    </div>
  );
};
