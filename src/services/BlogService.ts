

export const formatBlogContent = (content: string, maxIntroParagraphLength: number) => {
    if (content.length > maxIntroParagraphLength) {
        return content.slice(0, maxIntroParagraphLength).trim()+"..."
    } else {
        return content
    }
}

export interface BlogPost {
    title: string;
    author: string;
    content: string;
    image: string;
    url: string;
  }

export type BlogPostMap = Record<string, BlogPost>;


