import Link from 'next/link';

import { getReports } from '@/features/pricing/controllers/get-reports';
import { ArrowRightIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/outline';

export default async function ReportsPage() {
  const reports = await getReports();
  console.log('!!!!!!!!!!!!!!!!!!!!', reports);

  if (!reports) {
    return <p>Report not found</p>;
  }

  return (
    <div className='mx-auto mt-8 flex max-w-[1080px] flex-col gap-6 p-4 pb-0 md:flex-row'>
      <div className='w-full shrink-0 md:w-60'>
        <span className='mb-4 block border-b pb-2 font-alt text-lg font-bold'>Filters:</span>
        <div className='w-full'>
          <label htmlFor='countries' className='mb-2 block text-sm font-semibold text-gray-900 dark:text-white'>
            Niche:
          </label>
          <select
            id='countries'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          >
            <option value=''>Choose a Niche</option>
            <option value='US'>United States</option>
            <option value='CA'>Canada</option>
            <option value='FR'>France</option>
            <option value='DE'>Germany</option>
          </select>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <span className='mb-4 block border-b pb-2 font-alt text-lg font-bold'>Results: {reports.count}</span>
        {reports.data?.map((report) => (
          <div key={report.id} className='flex flex-col gap-3 rounded-xl bg-white p-5 shadow-lg'>
            <div className='text-dark flex gap-2 font-alt text-base'>
              <ArrowRightIcon className='h-6 w-6 rounded bg-[#D5FF3F] p-1 text-[#132030]' />
              {report.niche} Niche
            </div>
            <Link href={`/reports/${report.id}`}>
              <h2 className='text-2xl font-semibold'>{report.product_name}</h2>
            </Link>
            <p>{report.product_short_description}</p>
            <hr />
            <div className='flex gap-6'>
              <div className='flex w-max gap-2 rounded-md bg-[#E4FF33] p-2'>
                <div className='hidden sm:flex aspect-square h-full w-[24px] items-center justify-center rounded-sm bg-[#C7E211]'>
                  <StarIcon className='h-5 w-5 text-[#132030]' />
                </div>
                <div>
                  <div className='font-alt text-base'>
                    Score: <strong>{report.difficulty}</strong>
                  </div>
                </div>
              </div>
              <div className='flex w-max gap-2 rounded-md bg-[#31F2BF] p-2'>
                <div className='hidden sm:flex aspect-square h-full w-[24px] items-center justify-center rounded-sm bg-[#08DAA2]'>
                  <ChartBarIcon className='h-5 w-5 text-[#132030]' />
                </div>
                <div>
                  <div className='font-alt text-base'>
                    Costs: <strong>{report.costs}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
