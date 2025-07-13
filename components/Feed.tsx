import Post from "./Post"

const Feed = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-12">
      {
        [...Array(11)].map((_, i) => (
          <Post key={i}/>
          
        ))
      }
    </div>
  )
}

export default Feed