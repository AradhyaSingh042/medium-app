import { ChangeEvent } from "react";

export interface LabelledInputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface AuthProps {
  type: "signup" | "signin";
}

export interface QuoteProps extends AuthProps {
  background: "sky" | "slate";
}

export interface BlogCardProps {
  blogId: number;
  authorName: string;
  createdAt: string;
  title: string;
  content: string;
}

export interface AvatarProps {
  name: string;
}

export interface BlogsState {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
  };
}

export interface BlogContentProps {
  blog: BlogsState;
}

export interface UseBlogProps {
  id: string;
}

export interface PublishState {
  title: string;
  content: string;
  published?: string;
}
