import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {

  const {data, error} = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  useEffect(() => {
    if(data) {
      console.log(data)
    }

    if(error) {
      console.log(error)
    }
  }, [data, error])

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
