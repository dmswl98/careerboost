import { PDFDownloadLink } from '@react-pdf/renderer';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/common';
import PdfDocument from '@/components/Pdf/PdfDocument';
import { type ResumeFormDataSchema } from '@/types/form';

const DownloadButton = () => {
  const {
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useFormContext<ResumeFormDataSchema>();

  return (
    <>
      {isSubmitSuccessful ? (
        <PDFDownloadLink
          document={<PdfDocument resume={getValues()} />}
          fileName={`${getValues('userInfo.name')}님의_이력서.pdf`}
          style={{ width: '100%' }}
        >
          {({ loading, error }) => (
            <Button
              type="button"
              className="w-full"
              disabled={!!error || loading}
            >
              {loading ? '이력서 생성 중' : '이력서 다운로드'}
            </Button>
          )}
        </PDFDownloadLink>
      ) : (
        <Button type="submit" disabled={!!Object.keys(errors).length}>
          이력서 생성
        </Button>
      )}
    </>
  );
};

export default DownloadButton;
