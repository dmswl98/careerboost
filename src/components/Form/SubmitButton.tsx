import { PDFDownloadLink } from '@react-pdf/renderer';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';

import { useIsPreview, useResumePreviewActions } from '@/store/preview';
import { type ResumeFormDataSchema } from '@/types/form';

import PdfDocument from '../Pdf/PdfDocument';
import { Button } from '../ui/button';

const ISSUE_URL = {
  BUG: 'https://github.com/dmswl98/careerboost/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml&title=%5BBUG%5D',
  FEATURE:
    'https://github.com/dmswl98/careerboost/issues/new?assignees=&labels=feature&projects=&template=feature_request.yml&title=%5BFeature%5D',
};

const SubmitButton = () => {
  const isPreview = useIsPreview();
  const { setIsPreview } = useResumePreviewActions();

  const {
    getValues,
    formState: { isSubmitSuccessful },
  } = useFormContext<ResumeFormDataSchema>();

  return (
    <div className="fixed bottom-0 left-0 flex w-full justify-between border-t border-solid border-gray-200 bg-white px-6 py-4">
      <div>
        <Link href={ISSUE_URL.BUG} target="_blank">
          <Button variant="destructive" type="button" className="mr-2">
            <Github className="mr-2 h-4 w-4" />
            버그 신고
          </Button>
        </Link>
        <Link href={ISSUE_URL.FEATURE} target="_blank">
          <Button variant="success" type="button">
            <Github className="mr-2 h-4 w-4" />
            기능 건의
          </Button>
        </Link>
      </div>
      <div>
        <Button
          variant={isPreview ? 'outline' : 'ghost'}
          type="button"
          className={`mr-2 ${!isPreview ? 'border border-white' : 'bg-accent'}`}
          onClick={() => setIsPreview()}
        >
          🖼️ PDF 이력서 미리보기
        </Button>
        {isSubmitSuccessful ? (
          <PDFDownloadLink
            document={<PdfDocument resume={getValues()} />}
            fileName={`${getValues('userInfo.name')}님의_이력서.pdf`}
            style={{ padding: '10px 0' }}
          >
            {({ loading, error }) => (
              <Button variant="ghost" type="button" disabled={!!error}>
                {loading ? '🪄 PDF 이력서 만드는 중' : '📑 PDF 이력서 다운받기'}
              </Button>
            )}
          </PDFDownloadLink>
        ) : (
          <Button variant="ghost" type="submit">
            📁 PDF 이력서 만들기
          </Button>
        )}
      </div>
    </div>
  );
};

export default SubmitButton;
