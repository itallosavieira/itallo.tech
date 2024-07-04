import type { IPost } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import process from "process";

const postsDir = path.join(process.cwd(), "src/content/posts");

const getPosts = (): IPost[] => {
  const fileNames = fs.readdirSync(postsDir);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { title, date, category, description } = matter(fileContents).data;

    return {
      id,
      title,
      date,
      category,
      description
    }
  })

  return allPostsData;
}

const getSortedPostsByDate = (): IPost[] => {
  const allPosts = getPosts();

  return allPosts.sort((a, b) => {
    const dataA = new Date(a.date);
    const dataB = new Date(b.date);

    if (dataA > dataB) return 1
    if (dataA < dataB) return -1
    return 0
  })
}

export const getCategorisedPosts = (): Record<string, IPost[]> => {
  const sortedPosts = getSortedPostsByDate();
  const categorisedPosts: Record<string, IPost[]> = {};

  sortedPosts.forEach((post) => {
    if (!categorisedPosts[post.category]) {
      categorisedPosts[post.category] = []
    }
    categorisedPosts[post.category].push(post);
  })

  return categorisedPosts
}

export const getPost = async (id: string) => {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    id,
    content,
    title: data.title,
    category:data.category,
    date: data.date,
  }
}