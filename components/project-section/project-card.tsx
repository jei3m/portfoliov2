import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { AspectRatio } from "./aspect-ratio";
import { Badge } from "./badge";
import { Button } from "./button";
import { FaGithub } from "react-icons/fa6";
import { TransitionLink } from "../custom-wrapper/TransitionLink";

interface ProjectCardProps {
    title: string;
    type: string;
    description: string;
    imageUrl: string;
    githubUrl?: string;
    demoUrl?: string;
    skills?: readonly string[];
    
}

export function ProjectCard({ title, type, description, imageUrl, githubUrl, demoUrl, skills }: ProjectCardProps) {
    return (
        <CardContainer className="w-full h-full">
            <CardBody 
                className="mb-[-80px] relative w-full max-w-[600px] h-auto mx-auto rounded-xl p-0 text-white">
                
                <div className="flex flex-col h-full">
                    <CardItem className="w-full">
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
                    </CardItem>
                    
                    <div className="">
                        <CardItem
                            as="h3"
                            className="mt-2 text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-50"
                        >
                            {title}
                        </CardItem>
                        <CardItem
                            as="p"
                            className="text-xs sm:text-sm text-gray-400"
                        >
                            {type}
                        </CardItem>
                        <CardItem
                            as="p"
                            className="text-xs sm:text-[16px] leading-5 sm:leading-6 mt-2 text-yellow-50"
                        >
                            {description}
                        </CardItem>
                        
                        {skills && (
                            <CardItem
                                className="flex gap-1 sm:gap-1.5 flex-wrap mt-2 sm:mt-3"
                            >
                                {skills.map((skill) => (
                                    <Badge 
                                        key={skill} 
                                        variant="default" 
                                        className="text-white text-[10px] sm:text-xs px-2"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </CardItem>
                        )}
                    
                        {/* <CardItem
                            className="w-auto flex flex-row justify-between items-center mt-6"
                        >
                            {githubUrl && (
                                <Link href={githubUrl} target="_blank" passHref>
                                    <Button 
                                        size="sm" 
                                        className="bg-yellow-50 text-black px-3 h-8 sm:h-9"
                                    >
                                        <span className="text-xs sm:text-sm">Github</span>
                                        <FaGithub className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    </Button>
                                </Link>
                            )}

                           {demoUrl && (
                                <Link href={demoUrl} target="_blank" passHref>
                                    <Button 
                                        size="sm" 
                                        className="bg-yellow-50 px-3 h-8 sm:h-9"
                                    >
                                        <span className="text-xs text-black sm:text-sm">Demo</span>
                                        <ExternalLink className="text-black ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    </Button>
                                </Link>
                            )}
                        </CardItem> */}
                    </div>
                </div>
            </CardBody>
        </CardContainer>
    );
}