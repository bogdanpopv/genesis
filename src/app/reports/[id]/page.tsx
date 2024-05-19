import Link from 'next/link';

import { getReports } from '@/features/pricing/controllers/get-reports';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  EyeIcon,
  LightBulbIcon,
  PrinterIcon,
  ShareIcon,
  StarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

// Define the type for the 'params' object
interface Params {
  id: string;
}

interface ReportBlockType {
  icon: React.ElementType;
  title: string;
  text: string | string[];
  className?: string;
  id: string;
}

const ReportBlock = ({ icon: Icon, title, text, className = '', id }: ReportBlockType) => {
  return (
    <div id={id} className={`mb-6 border-b border-[#DEDEDE] pb-6 ${className}`}>
      <div className='mb-3 flex items-center gap-3'>
        <Icon className='h-12 w-12 rounded bg-[#D5FF3F] p-2 text-[#132030]' />
        <span className='font-alt font-bold'>{title}</span>
      </div>
      <div>
        {Array.isArray(text) ? (
          <ul className='list-disc pl-8'>
            {text.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  );
};

export default async function ReportPage({ params }: { params: Params }) {
  const { id } = params;
  const reports = await getReports(id);
  const report = reports?.find((r) => r.id.toString() === id);

  if (!report) {
    return <p>Report not found</p>;
  }

  return (
    <>
      <div className='bg-gradient-to-b from-white to-[#E1E5E9]'>
        <div className='m-auto flex max-w-[1080px] items-end gap-14 px-4 pb-[174px]'>
          <div className='flex w-1/2 flex-col gap-6'>
            <div className='text-dark flex gap-2 font-alt text-base'>
              <ArrowRightIcon className='h-6 w-6 rounded bg-[#D5FF3F] p-1 text-[#132030]' />
              {report.niche} Niche
            </div>
            <h1 className='text-[56px] font-bold leading-[66px] tracking-tighter'>{report.product_name}</h1>
            <h2 className='text-lg font-medium leading-7'>{report.product_short_description}</h2>
          </div>
          <div className='w-1/2'>
            <div className='flex w-full flex-col gap-6 rounded-3xl bg-[#1A2B3B] p-6'>
              <div className='flex gap-6'>
                <div className='flex w-1/2 gap-2 rounded-xl bg-[#E4FF33] p-3'>
                  <div className='flex aspect-square h-full w-[66px] items-center justify-center rounded-xl bg-[#C7E211]'>
                    <StarIcon className='h-6 w-6 text-[#132030]' />
                  </div>
                  <div>
                    <div className='font-alt text-xl'>Score:</div>
                    <div className='text-3xl font-bold'>80</div>
                  </div>
                </div>
                <div className='flex w-1/2 gap-2 rounded-xl bg-[#31F2BF] p-3'>
                  <div className='flex aspect-square h-full w-[66px] items-center justify-center rounded-xl bg-[#08DAA2]'>
                    <ChartBarIcon className='h-6 w-6 text-[#132030]' />
                  </div>
                  <div>
                    <div className='font-alt text-xl'>Difficulty:</div>
                    <div className='text-3xl font-bold'>80</div>
                  </div>
                </div>
              </div>
              <div className='flex w-full gap-2 rounded-xl bg-[#34BCFF] p-3'>
                <div className='flex aspect-square h-full w-[66px] items-center justify-center rounded-xl bg-[#2597E8]'>
                  <ChatBubbleLeftRightIcon className='h-6 w-6 text-white' />
                </div>
                <div className='text-white'>
                  <div className='font-alt text-xl'>Information From:</div>
                  <div className='text-3xl font-bold'>r/Boardgames</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='m-auto -mt-20 flex max-w-[1080px] px-4'>
        <div className='sticky top-10 mt-32 flex h-max flex-col text-sm shrink-0'>
          <span className='mb-3 border-b px-3 pb-3 font-alt font-bold uppercase'>Jump to:</span>
          <a className='mb-3 border-b px-3 pb-3' href='#report-block-1'>
            Product Idea
          </a>
          <a className='mb-3 border-b px-3 pb-3' href='#report-block-2'>
            Target Customer
          </a>
          <a className='mb-3 border-b px-3 pb-3' href='#report-block-3'>
            Competitors
          </a>
          <a className='mb-3 border-b px-3 pb-3' href='#report-block-4'>
            Marketing Headlines
          </a>
          <a className='mb-3 border-b px-3 pb-3' href='#report-block-5'>
            Pricing Strategy
          </a>
          <a className='mb-3 border-b px-3 pb-3' href='#report-block-6'>
            Value Proposition
          </a>
        </div>
        <div className='flex w-full max-w-[700px] shrink-0 flex-col rounded-3xl bg-white p-8 shadow-xl'>
          <div className='mb-6 flex justify-between border-b border-dashed border-[#DEDEDE] pb-6'>
            <span className='font-alt text-2xl font-bold'>Full Report</span>
            <div className='flex gap-6'>
              <ShareIcon className='h-6 w-6 text-[#132030]' />
              <PrinterIcon className='h-6 w-6 text-[#132030]' />
            </div>
          </div>
          <div className='flex gap-8'>
            <div className='flex w-6 shrink-0 flex-col justify-between'>
              <div className='h-6 w-6 rounded-full bg-[#f5f5f5] shadow-inner'></div>
              <div className='h-6 w-6 rounded-full bg-[#f5f5f5] shadow-inner'></div>
              <div className='h-6 w-6 rounded-full bg-[#f5f5f5] shadow-inner'></div>
              <div className='h-6 w-6 rounded-full bg-[#f5f5f5] shadow-inner'></div>
            </div>
            <div>
              {report.product_description && (
                <ReportBlock
                  id='report-block-1'
                  icon={LightBulbIcon}
                  title={'Product Idea'}
                  text={report.product_description}
                />
              )}
              {report.product_target_customer && (
                <ReportBlock
                  id='report-block-2'
                  icon={UserGroupIcon}
                  title={'Target Customer'}
                  text={report.product_target_customer}
                />
              )}
              {report.product_competitors && (
                <ReportBlock
                  id='report-block-3'
                  icon={EyeIcon}
                  title={'Competitors'}
                  text={report.product_competitors}
                />
              )}
              {report.product_marketing_headlines && (
                <ReportBlock
                  id='report-block-4'
                  icon={ArrowTrendingUpIcon}
                  title={'Marketing Headlines'}
                  text={report.product_marketing_headlines as string | string[]}
                />
              )}
              {report.product_pricing_strategy && (
                <ReportBlock
                  id='report-block-5'
                  icon={CurrencyDollarIcon}
                  title={'Pricing Strategy'}
                  text={report.product_pricing_strategy}
                />
              )}
              {report.product_value_proposition && (
                <ReportBlock
                  id='report-block-6'
                  icon={CurrencyDollarIcon}
                  title={'Value Proposition'}
                  text={report.product_value_proposition}
                  className='!mb-0 border-none !pb-0'
                />
              )}
            </div>
          </div>
        </div>
        <div className='ml-6 bg-[#1A2B3B] p-3 flex flex-col text-white gap-6 rounded-xl h-max sticky top-0'>
          <span className='text-sm font-bold'>Your Voice Shapes Your Future!</span>
          <span className='text-xs'>
            Your feedback drives improvement. Quick, easy, impactful. Please share your thoughts and help us help you!
          </span>
          <Link className='bg-[#34BCFF] p-2 w-full text-xs text-center rounded font-bold' href='#'>
            Share Feedback
          </Link>
        </div>
      </div>
    </>
  );
}
