
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, bgImage, className }: PageHeaderProps) => {
  return (
    <div
      className={cn(
        "relative py-24 bg-ridge-black bg-opacity-90 bg-cover bg-center",
        className
      )}
      style={
        bgImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
            }
          : {}
      }
    >
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && <p className="text-xl text-gray-200 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
