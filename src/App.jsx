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
 const [err, setErr]=useState(false);

 const [flt, setflt]=useState(false);
  const [count, setCount] = useState([])
  const Data=async ()=>{
    const malumot= await fetch('https://frontend-mentor-apis-6efy.onrender.com/devjobs?search='+filtr+'&location='+manzl+'&fulltime='+full);
    const malumotJs=await malumot.json();
    setCount(malumotJs.data);
    console.log(malumotJs.data);
    if (malumotJs.data.length==0) {
      setErr(true)
    }else {setErr(false)};
  }

useEffect(()=>{
  Data();
  console.log("m");
}, []);



function Fil(x){
  setfiltr(x);
}



function Man(x){
  setManzl(x)
}



function Search(){
  Data();
  setfiltr('');
  setManzl('');
  setflt(false);
}





function Body(mal){

  

 return mal.map(count=>{
    return (<div className='bgbola flex flex-col w-[350px] h-[228px] rounded-md px-8  pt-7'>

    <Im bg={count.logoBackground}  className={`w-[50px] h-[50px] rounded-lg flex justify-center items-center absolute mt-[-53px]`}>
        <img src={`https://frontend-mentor-apis-6efy.onrender.com${count.logo}`} alt="xx" />
     </Im>

     <div className='flex gap-3 text-[#6E8098] w-60  text-[16px] font-normal mb-4 mt-2'>
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
  
  if (err) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96" fill="rgba(236,28,28,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
  } else{
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
}


function Sorov(){
  setflt(true);  
}




return(
  <div className='order-10 absolute bgota flex w-full flex-col' >


<div className={`${flt ? 'block':'hidden'} w-[100vw] h-[100vh] fixed  z-40 oldoyna mt-[-160px]`} onClick={()=>setflt(false)}>

  <div className='w-[327px] h-[217px] bgbola flex flex-col rounded-[5px] ml-auto mr-auto mt-[30vh]' onClick={(a)=>a.stopPropagation()}>

      <div className='w-full h-20 flex justify-center items-center gap-4 px-6 border-b-[1px] border-solid border-slate-500'>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.44766 0C10.6803 0 12.7796 0.870546 14.3584 2.45105C17.2802 5.37556 17.6433 10.8781 15.1348 14.2255L8.44766 23.894L1.75053 14.2119C-0.748035 10.8781 -0.384933 5.37556 2.53689 2.45105C4.11571 0.870546 6.21455 0 8.44766 0ZM5.47353 8.29091C5.47353 9.97484 6.84268 11.3455 8.52481 11.3455C10.2069 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.2069 5.23636 8.52481 5.23636C6.84268 5.23636 5.47353 6.60698 5.47353 8.29091Z" fill="#5964E0"/>
          </svg>
            <input type="text" value={manzl} onChange={(a)=>Man(a.target.value)} className='w-[165px] outline-none h-8  bgbola cursor-pointer Link' placeholder='Filter by location…' />
      </div>


      <div className='w-[299px] Limk h-20 flex justify-center items-center gap-4 pl-4'>
            <input type='checkbox' className='w-5 h-5 bg-[#19202D] cursor-pointer' onClick={()=>setfull(!full)}/>
            <h2 className='text-[16px] font-bold Link'>Full Time Only</h2>
      </div>
      <button className='btn bg-[#5964E0] text-white rounded-[5px] border-none hover:bg-[#5964e0cc] mx-6' onClick={Search}>Search</button>
  </div>
</div>




    <div className='lg:w-[1110px] h-20 bgbola ml-auto mr-auto rounded-md mt-[-40px] flex'>


      <div className='lg:w-[464px] w-[327px]  border-solid lg:border-r-[1px] border-slate-500 h-20 px-4 lg:px-0 flex justify-center items-center gap-4'>
      <svg className='cursor-pointer hidden lg:block' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z" fill="#5964E0"/>
      </svg>
        <input type="text" value={filtr} onChange={(a)=>Fil(a.target.value)} className='w-[271px] outline-none h-8 text-center bgbola cursor-pointer Link' placeholder='Filter by title, companies, expertise…' />

        <button className='block lg:hidden' onClick={Sorov}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className='svg'>
          <path d="M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z"/>
        </svg>
        </button>

        <button onClick={Search} className='block lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="5" fill="#5964E0"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3533 26.549H28.2603L33.9529 32.2531L32.2531 33.9529L26.549 28.2603V27.359L26.2353 27.0453C24.9405 28.1576 23.2578 28.8307 21.4153 28.8307C17.3198 28.8307 14 25.5109 14 21.4153C14 17.3198 17.3198 14 21.4153 14C25.5109 14 28.8306 17.3198 28.8306 21.4153C28.8306 23.2578 28.1576 24.9405 27.0396 26.2353L27.3533 26.549ZM16.2817 21.4153C16.2817 24.2503 18.5804 26.549 21.4153 26.549C24.2503 26.549 26.549 24.2503 26.549 21.4153C26.549 18.5804 24.2503 16.2817 21.4153 16.2817C18.5804 16.2817 16.2817 18.5804 16.2817 21.4153Z" fill="white"/>
        </svg>
        </button>
      </div>


      <div className='w-[299px] hidden border-solid border-slate-500 border-r-[1px] h-20 lg:flex justify-center items-center gap-4'>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.44766 0C10.6803 0 12.7796 0.870546 14.3584 2.45105C17.2802 5.37556 17.6433 10.8781 15.1348 14.2255L8.44766 23.894L1.75053 14.2119C-0.748035 10.8781 -0.384933 5.37556 2.53689 2.45105C4.11571 0.870546 6.21455 0 8.44766 0ZM5.47353 8.29091C5.47353 9.97484 6.84268 11.3455 8.52481 11.3455C10.2069 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.2069 5.23636 8.52481 5.23636C6.84268 5.23636 5.47353 6.60698 5.47353 8.29091Z" fill="#5964E0"/>
      </svg>
        <input type="text" value={manzl} onChange={(a)=>Man(a.target.value)} className='w-[165px] outline-none h-8 text-center bgbola cursor-pointer Link' placeholder='Filter by location…' />
      </div>


      <div className='w-[299px] hidden Limk h-20 lg:flex justify-center items-center gap-4 pl-4'>
        <input type='checkbox' className='w-5 h-5 bg-[#19202D] cursor-pointer' onClick={()=>setfull(!full)}/>
        <h2 className='text-[16px] font-bold Link'>Full Time Only</h2>
        <button className='btn bg-[#5964E0] text-white rounded-[5px] border-none hover:bg-[#5964e0cc] ml-10' onClick={Search}>Search</button>
      </div>


    </div>


    <div className='mt-[105px] flex flex-wrap justify-center gap-[30px] gap-y-[65px] px-[165px] '>
      {count.length!=0 ? Body(count):Skleton()}
    </div>



    <div className='w-full flex items-center justify-center mt-14  pb-[104px]'>
      <button className={`bg-[#5964E0] cursor-pointer hover:bg-[#939BF4] rounded-[5px] w-[141px] h-12 text-white ${err ? 'hidden':''}`}>Load More</button>
    </div>
  </div>
)




}

export default App
