import './Card.scss'

const Card = ({ onClick, subjectRating, subject, question, text, created_at, team }) => {
  return (
      <div onClick={onClick} className='card'>
        <div className='left-col'>
          <div className={`subject ${subjectRating}`}>{subject}</div>
          <div className='question'>{question}</div>
          <div className='text'>{text}</div>
        </div>
        <div className='right-col'>
          <div className='team'>{team}</div>
          <div className='created-at'>{created_at}</div>
        </div>
      </div>
  )
}

export default Card