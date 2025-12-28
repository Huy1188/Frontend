import CategoryPage from "@/app/components/Pages/Category/index";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// export default function CategorySlugPage({ params }: Props) {
//   const { slug } = params;
//   if (!slug) notFound();

//   return <CategoryPage slug={slug} />;
// }

export default function CategorySlugPage({ params }: { params: { slug: string } }) {
  return <div style={{ padding: 40 }}>CATEGORY OK: {params.slug}</div>;
}
