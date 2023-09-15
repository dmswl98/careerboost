interface GuideProps {
  descrption: string;
}

const Guide = ({ descrption }: GuideProps) => {
  return (
    <div className="mb-5 mt-1 rounded-lg bg-gray-100 p-4 text-sm text-gray-600">
      {descrption}
    </div>
  );
};

export default Guide;
