import { MarkdownRenderer } from '@/components';

const Post = ({post}: {post: Record<string, any>}) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div className="content">
         <MarkdownRenderer>{post.content}</MarkdownRenderer>
     </div>
    </div>
   )
}

export default Post;
