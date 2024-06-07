
import ThreadGroup from './ThreadGroup';
import useFetchThreads from '../utils/useFetchThreads';
import './ThreadWrapper.scss'

const ThreadWrapper = () => {
  const threads = useFetchThreads();

  return (
    <div className="thread-wrapper">
        {threads?.map((items, index) => {
          return (
            <ThreadGroup items={items} key={index}/>
          )
        })}
    </div>
  )
}

export default ThreadWrapper
