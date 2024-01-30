import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Im=styled.div`
  background-color: ${props=>props.bg};
`

function App() {
  const [filtr, setfiltr] = useState('');
  const [manzl, setManzl] = useState('')
  const [full, setfull] = useState(false)



  const [count, setCount] = useState([])
  const Data=async ()=>{
    const malumot= await fetch('https://frontend-mentor-apis-6efy.onrender.com/devjobs?search=&location=&fulltime&limit&skip=');
    const malumotJs=await malumot.json();
    setCount(malumotJs.data);
    console.log(malumotJs.data);
  }

useEffect(()=>{
  Data();
  console.log("m");
}, []);


function Body(mal){
 return mal.map(count=>{
    return (<div className='bgbola w-[350px] h-[228px] rounded-md px-8  pt-7'>

    <Im bg={count.logoBackground}  className={`w-[50px] h-[50px] rounded-lg flex justify-center items-center absolute mt-[-53px]`}>
        <img src={`https://frontend-mentor-apis-6efy.onrender.com${count.logo}`} alt="xx" />
     </Im>

     <div className='flex gap-3 text-[#6E8098] text-[16px] font-normal mb-4 mt-2'>
          <h3>{count.postedAt}</h3>
          <h3>.</h3>
          <h3>{count.contract}</h3>
     </div>
     <Link to={`/pags/${count.id}`} className='Link cursor-pointer hover:text-[#6E8098] h-6 block overflow-hidden text-[20px] font-bold'> {count.position}</Link>
     <h3 className='text-[#6E8098] mt-[14px] mb-[40px] text-[16px] font-normal'>{count.company}</h3>
     <h2 className='text-[#5964E0] text-14px] font-bold'>{count.location}</h2>

  </div>)
  })
}

 const sonlar=[1, 2, 3, 4, 5, 6]
function Skleton(){
return sonlar.map(a=>{
  return(
    <div class="flex flex-col gap-4 w-[350px] h-[228px] rounded-md bgbola p-5 px-8">
  <div class="flex flex-col gap-4 ">
    <div class="skeleton w-[50px] h-[50px] rounded-5 shrink-0 mt-[-44px]"></div>
    <div class="flex flex-col gap-4">
      <div class="skeleton h-4 w-44"></div>
      <div class="skeleton h-4 w-56"></div>
    </div>
  </div>
  <div class="skeleton h-4 w-24"></div>
  <div class="skeleton h-4 w-32 mt-10"></div>
</div>
  )
})
}


return(
  <div className='order-10 absolute bgota' >







    <div className='w-[1110px] h-20 bgbola ml-auto mr-auto rounded-md mt-[-40px] flex'>


      <div className='w-[464px]  border-solid border-r-[1px] border-slate-500 h-20 flex justify-center items-center gap-4'>
      <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z" fill="#5964E0"/>
      </svg>
        <input type="text" className='w-[271px] h-8 text-center bgbola cursor-pointer Link' placeholder='Filter by title, companies, expertise…' />
      </div>


      <div className='w-[299px]  border-solid border-slate-500 border-r-[1px] h-20 flex justify-center items-center gap-4'>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.44766 0C10.6803 0 12.7796 0.870546 14.3584 2.45105C17.2802 5.37556 17.6433 10.8781 15.1348 14.2255L8.44766 23.894L1.75053 14.2119C-0.748035 10.8781 -0.384933 5.37556 2.53689 2.45105C4.11571 0.870546 6.21455 0 8.44766 0ZM5.47353 8.29091C5.47353 9.97484 6.84268 11.3455 8.52481 11.3455C10.2069 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.2069 5.23636 8.52481 5.23636C6.84268 5.23636 5.47353 6.60698 5.47353 8.29091Z" fill="#5964E0"/>
      </svg>
        <input type="text" className='w-[165px] h-8 text-center bgbola cursor-pointer Link' placeholder='Filter by location…' />
      </div>


      <div className='w-[299px] Limk h-20 flex justify-center items-center gap-4 pl-4'>
        <input type='checkbox' className='w-5 h-5 bg-[#19202D] cursor-pointer'/>
        <h2 className='text-[16px] font-bold Link'>Full Time Only</h2>
        <button className='btn bg-[#5964E0] text-white rounded-[5px] border-none hover:bg-[#5964e0cc] ml-10'>Search</button>
      </div>


    </div>


    <div className='mt-[105px] flex flex-wrap justify-center gap-[30px] gap-y-[65px] px-[165px]'>
      {count.length!=0 ? Body(count):Skleton()}
    </div>



    <div className='w-full flex items-center justify-center mt-14  pb-[104px]'>
      <button className='bg-[#5964E0] cursor-pointer hover:bg-[#939BF4] rounded-[5px] w-[141px] h-12 text-white'>Load More</button>
    </div>
  </div>
)




}

export default App
