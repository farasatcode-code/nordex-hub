import Link from "next/link";

type PageHeaderProps = {
  title: string;
  breadcrumb?: string;
};

export default function PageHeader({ title, breadcrumb = title }: PageHeaderProps) {
  return (
    <div className="container-fluid page-header py-5">
      <div className="container text-center py-5">
        <h1 className="display-2 text-white mb-4 animated slideInDown">{title}</h1>
        <nav aria-label="breadcrumb" className="animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">Pages</li>
            <li className="breadcrumb-item" aria-current="page">
              {breadcrumb}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
