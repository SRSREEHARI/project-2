import { notFound } from "next/navigation";
import { getPortfolioItemById } from "@lib/api";
import ProjectDetail from "@/components/ProjectDetail";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getPortfolioItemById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
