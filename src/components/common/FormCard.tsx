interface FormCardProps {
  title: string;
}

const FormCard = ({
  children,
  title,
}: StrictPropsWithChildren<FormCardProps>) => {
  return (
    <div className="w-[800px] rounded-xl border border-gray-200/70 bg-white p-8">
      <h1 className="bg-white pb-3 text-xl font-bold">{title}</h1>
      {children}
    </div>
  );
};

export default FormCard;
