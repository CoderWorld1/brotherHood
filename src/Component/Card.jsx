// import React from 'react'
// import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

// function Card(props) {
//   let review = props.review
//   console.log(review);

//   return (
//     <div className='flex flex-col md:relative '>
//       <div className='absolute top-[-7rem] z-[10] mx-auto '>
//         <img
//           className='aspect-square rounded-full w-[140px] h-[140px] z-[25] '
//           src={review.image} />
//         <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px] '></div>
//       </div>

//       <div className='text-center mt-7'>
//         <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
//         <p className='text-violet-400 uppercase text-sm'>{review.job}</p>
//       </div>

//       {/* <div className='text-center mt-7'>
//             </div> */}

//       <div className='text-violet-400 mx-auto mt-5'><FaQuoteLeft /></div>

//       <div className='text-center mt-4 text-slate-500'>
//         {review.text}
//       </div>

//       <div className='text-violet-400 mx-auto mt-5'><FaQuoteRight /></div>

//     </div>
//   )
// }

// export default Card



import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

function Card(props) {
  let review = props.review
  // console.log(review);

  return (
    <div className='flex flex-col md:relative items-center'>
      <div className='relative mt-[-3.5rem] md:mt-0'>
        <img
          className='aspect-square rounded-full w-[140px] h-[140px] z-[25] '
          src={review.image} />
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-10]'></div>
      </div>

      <div className='text-center mt-7'>
        <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
        <p className='text-violet-400 uppercase text-sm'>{review.job}</p>
      </div>

      <div className='text-violet-400 mx-auto mt-5'><FaQuoteLeft /></div>

      <div className='text-center mt-4 text-slate-500 mx-4 md:mx-0'>
        {review.text}
      </div>

      <div className='text-violet-400 mx-auto mt-5'><FaQuoteRight /></div>
    </div>
  )
}

export default Card
