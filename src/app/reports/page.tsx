import Link from 'next/link';

import { getReports } from '@/features/pricing/controllers/get-reports';

// Define the type for the 'params' object
interface Params {
  id: string;
}

export default async function ReportsPage({ params }: { params: Params }) {
  const reports = await getReports();

  if (!reports) {
    return <p>Report not found</p>;
  }

  return (
    <div>
      {reports.map((report) => (
        <div key={report.id}>
          <div>{report.product_name}</div>
          <div>{report.product_description}</div>
          <Link href={`/reports/${report.id}`}>
            REPORT LINK
          </Link>
        </div>
      ))}
    </div>
  );
}
