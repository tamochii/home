import React from 'react';
import { Github, Palette, BookOpen, Twitter, Youtube, Rocket, ExternalLink, X, Tv, Layers, Coffee, FileText, Terminal, Sparkles, User } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'Github': return <Github className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Twitter': return <Twitter className={className} />;
    case 'Youtube': return <Youtube className={className} />;
    case 'Rocket': return <Rocket className={className} />;
    case 'ExternalLink': return <ExternalLink className={className} />;
    case 'X': return <X className={className} />;
    case 'Tv': return <Tv className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Coffee': return <Coffee className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'Terminal': return <Terminal className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'User': return <User className={className} />;
    default: return <ExternalLink className={className} />;
  }
};