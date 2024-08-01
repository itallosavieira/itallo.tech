import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent" />
    </div>
  )
}

export default Loading