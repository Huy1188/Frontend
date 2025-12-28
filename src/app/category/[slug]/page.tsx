import CategoryPage from "@/app/components/Pages/Category/index";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function CategorySlugPage({ params }: Props) {
  const { slug } = params;
  if (!slug) notFound();

  return <CategoryPage slug={slug} />;
}
