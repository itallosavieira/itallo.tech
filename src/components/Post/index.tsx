import { MarkdownRenderer, Page } from '@/components';

const Post = ({post}: {post: Record<string, any>}) => {
  return (
    <Page
      section="Post"
      title={post.title}
    >
      <MarkdownRenderer>{post.content}</MarkdownRenderer>
    </Page>
   )
}

export default Post;
