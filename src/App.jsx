
// import Friends from './Component/Friends'
// import reviews from './data';

// function App() {
//   return (
//     <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
//       <div className='text-center'>
//         <h1 className='text-4xl font-bold'>Our Team</h1>
//         <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>

//         <Friends reviews={reviews} />
//       </div>
//     </div>
//   );
// }

// export default App;




import Friends from './Component/Friends'
import reviews from './data';

function App() {
  return (
    <div className='flex flex-col w-full h-full justify-center items-center bg-gray-200 px-4'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-4xl font-bold'>Our Team</h1>
        <div className='bg-violet-400 h-[4px] w-1/2 md:w-1/5 mt-1 mx-auto'></div>

        <Friends reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
