import Skeleton from "react-loading-skeleton"

const Loading = ({ height }) => {
  return (
    <Skeleton height={height} borderRadius="1rem" />
  )
}

export default Loading