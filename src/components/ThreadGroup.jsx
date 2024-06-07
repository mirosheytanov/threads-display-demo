import { useState } from 'react';
import Card from './Card';
import MessageCounter from './MessageCounter';
import './ThreadGroup.scss';

const ThreadGroup = ({ items }) => {
  const [expand, setExpand] = useState(1);

  const threadRating = items[0].score;
  return (
    <div className='thread-group'>
      {items?.map((subItems, subIndex) => {
        if(subIndex < expand) {
          return <Card onClick={() => setExpand(items.length)} subjectRating={subItems.score > 5 ? 'high-rating-message': 'low-rating-message'} key={subIndex} {...subItems } />
        }
      })}
      {expand < 2 && items?.length > 1 ? <MessageCounter threadRating={threadRating > 5 ? 'high-rating-thread' : 'low-rating-thread'} number={items.length} /> : null}
    </div>
  )
}

export default ThreadGroup
