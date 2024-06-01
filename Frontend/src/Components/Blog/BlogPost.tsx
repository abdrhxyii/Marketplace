import moment from 'moment';
import Navbar from '../Navbar/Navbar'

const BlogPost = () => {

    const commentsData = [
        {
          id: 1,
          name: 'Alice Johnson',
          date: '2023-05-20',
          content: 'This is a great post! Thanks for sharing.',
        },
        {
          id: 2,
          name: 'Bob Smith',
          date: '2023-05-21',
          content: 'I found this information very useful. Keep up the good work!',
        },
        {
          id: 3,
          name: 'Charlie Brown',
          date: '2023-05-22',
          content: 'Interesting perspective. I learned a lot from this article.',
        },
      ];

  return (
    <>
    <Navbar/>
    <div className='m-2.5 lg:m-14'>
        <div className='lg:w-full'>
        <img className='rounded-lg lg:w-full' src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
        </div>
        <div className='mt-5'>
            <p className='text-sm text-gray-500'>Written by Abdur Rahman</p>
            <p className='text-sm text-gray-500'>2024/06/10</p>
        </div>
        <div className='mt-5'>
            <p>Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that 
            are programmed to think and learn like humans. AI is a broad field that encompasses various 
            technologies and approaches, all aimed at enabling machines to perform tasks that typically 
            require human intelligence. These tasks include reasoning, learning, problem-solving, perception, 
            language understanding, and even some degree of creativity.
            </p>
        </div>
        <div className='mt-5'>
      <h5 className='text-lg font-extrabold'>Comments</h5>
      <div className='mt-4 space-y-4'>
        {commentsData.map((comment) => (
          <div key={comment.id} className='bg-white p-4 shadow rounded-lg'>
            <div className='flex justify-between items-center mb-2'>
              <h6 className='text-md font-semibold'>{comment.name}</h6>
              <span className='text-sm text-gray-500'>
                {moment(comment.date).format('MMMM D, YYYY')}
              </span>
            </div>
            <p className='text-gray-700'>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default BlogPost