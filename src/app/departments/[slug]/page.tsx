import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CTABanner from "../../../components/CTABanner";
import DepartmentDetailView from "../../../components/DepartmentDetailView";
import { departments, getDepartmentBySlug } from "../../../data/departments";

export async function generateStaticParams() {
  const params = departments.map((dept) => ({
    slug: dept.slug,
  }));
  params.push({ slug: "womens-health" });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);

  if (!dept) {
    return {
      title: "Department Not Found | CarePlus Medical",
    };
  }

  return {
    title: `${dept.name} | CarePlus Medical`,
    description: `${dept.name} at CarePlus Medical: ${dept.shortDescription}`,
  };
}

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);

  if (!dept) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <DepartmentDetailView department={dept} />
      <div className="mt-16">
        <CTABanner />
      </div>
      <Footer />
    </div>
  );
}
