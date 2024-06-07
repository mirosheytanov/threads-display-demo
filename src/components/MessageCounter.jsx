import './MessageCounter.scss'

const MessageCounter = ({ threadRating, number }) => {
  return (
    <div className={`${threadRating} message-wrapper`}><span>{number} messages</span></div>
  )
}

export default MessageCounter
