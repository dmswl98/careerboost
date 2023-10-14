import { PDFDownloadLink } from '@react-pdf/renderer';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/common';
import PdfDocument from '@/components/Pdf/PdfDocument';
import type * as i18n from '@/i18n/ko.json';
import { type ResumeFormDataSchema } from '@/types/form';

interface DownloadButtonProps {
  dictionary: (typeof i18n)['sidebar']['downloadButton'];
}

const DownloadButton = ({ dictionary }: DownloadButtonProps) => {
  const {
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useFormContext<ResumeFormDataSchema>();

  return (
    <>
      {isSubmitSuccessful ? (
        <PDFDownloadLink
          document={<PdfDocument resume={getValues()} />}
          fileName={`${getValues('userInfo.name')}${dictionary.fileName}`}
          style={{ width: '100%' }}
        >
          {({ loading, error }) => (
            <Button
              type="button"
              variant={!loading && !error ? 'success' : 'default'}
              className="w-full"
              disabled={loading || !!error}
              aria-label={dictionary.downloadResume}
            >
              {loading ? dictionary.creatingResume : dictionary.downloadResume}
            </Button>
          )}
        </PDFDownloadLink>
      ) : (
        <Button
          type="submit"
          disabled={!!Object.keys(errors).length}
          aria-label={dictionary.createResume}
        >
          {dictionary.createResume}
        </Button>
      )}
    </>
  );
};

export default DownloadButton;
