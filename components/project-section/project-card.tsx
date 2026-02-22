import Image from 'next/image';
import { AspectRatio } from './aspect-ratio';
import { Badge } from './badge';

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  skills?: readonly string[];
}

export function ProjectCard({
  title,
  type,
  description,
  imageUrl,
  githubUrl,
  skills,
}: ProjectCardProps) {
  return (
    <div className="relative w-full max-w-[600px] h-full mx-auto rounded-xl p-0 text-white">
      <div className="flex flex-col h-full">
        <div className="w-full flex-none">
          <a href={githubUrl} target="_blank">
            <AspectRatio ratio={16 / 8.5}>
              <Image
                src={imageUrl}
                alt="Project Image"
                fill
                className="rounded-lg object-cover"
              />
            </AspectRatio>
          </a>
        </div>

        <div className="h-full flex flex-col">
          <h3 className="mt-2 text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-50">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            {type}
          </p>
          <p className="text-xs sm:text-[16px] leading-5 sm:leading-6 mt-2 text-yellow-50 mb-4">
            {description}
          </p>

          {skills && (
            <div className="flex gap-1 sm:gap-1.5 flex-wrap mt-auto">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="default"
                  className="text-white text-[10px] sm:text-xs px-2"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
