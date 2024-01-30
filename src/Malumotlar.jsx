import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import styled from "styled-components";





const Bg=styled.div`
  background-color: ${props=>props.bg};
`

function Malumotlar() {
    const [pags , setPags]=useState(null);

const id=useParams().id;

async function Pag(){
    const malum= await fetch(`https://frontend-mentor-apis-6efy.onrender.com/devjobs`);
    const malumotJs=await malum.json();
    malumotJs.data.map(a=>{
      if (a.id==id) {
        setPags(a);
        console.log(a);
      }
    })
}

useEffect(()=>{
    Pag();
}, [])

if (pags) {
  return (
    <div>


      <div className="w-[730px] h-[140px] flex bgbola ml-auto mr-auto mt-[-40px] ">


        <Bg className="w-[140px] h-[140px] flex py-9 justify-center px-4" bg={pags.logoBackground}>
         <img src={`https://frontend-mentor-apis-6efy.onrender.com${pags.logo}`} alt="xx" />
        </Bg>


        <div className="px-[43px] flex justify-between items-center w-full">
          <div>
            <h2 className="text-[#fff] text-[24px] font-bold Link">{pags.company}</h2>
            <p className="text-[#6E8098] text-[16px] font-normal ">{pags.company}.com</p>
          </div>
          <div>
            <a href={pags.website} className="w-[147px] flex justify-center items-center h-12 bg-slate-600 text-[16px] font-bold text-white">
            Company Site
            </a>
          </div>

        </div>


      </div>



      <div className="w-[730px] bgbola pb-12 pl-12 pr-[43px] pt-12 mt-8 ml-auto mr-auto rounded-[5px]">

        <div className="flex justify-between items-center">
            <div>
                <div className="flex gap-3 text-[#6E8098] text-[16px] font-normal"> 
                    <p>{pags.postedAt}</p>
                    <p>.</p>
                    <p>{pags.contract}</p>
                </div>
                <h2 className="Link text-[28px] font-bold">{pags.position}</h2>
                <p className="text-[#5964E0] font-bold text-[14px]">{pags.location}</p>
            </div>
            <div>
              <a href={pags.apply} className="w-[141px] flex justify-center items-center h-12 bg-[#5964E0] text-white rounded-[5px]">Apply Now</a>
            </div>
        </div>


        <div>
          <p className="text-[#9DAEC2] text-[16px] font-normal mt-[40px]">{pags.description}</p>
        </div>


        <div>
          <h2 className="Link text-[20px] font-bold mt-10">Requirements</h2>
        </div>


        <div>
          <p className="tex text-[16px] font-normal mt-[40px]">{pags.requirements.content}</p>
        </div>


        <div>
          <ul className="tex text-[16px] font-normal mt-[40px] ml-7">
            {pags.requirements.items.map(a=><li className="list-disc">{a}</li>)}
          </ul>
        </div>


        <div>
          <h2 className="Link text-[20px] font-bold mt-10">What You Will Do</h2>
        </div>

        <div>
          <p className="tex text-[16px] font-normal mt-[40px]">{pags.role.content}</p>
        </div>


        <div>
          <ul className="tex text-[16px] font-normal mt-[40px] ml-7">
            {pags.role.items.map(a=><li className="list-decimal">{a}</li>)}
          </ul>
        </div>

        <Link to={'/'} className="Link bg-blue-500 rounded-md hover:bg-blue-400 py-1 px-2 mt-5 block w-16 ml-[30vw]">Back</Link>
      </div>

      <div className="w-full h-24 flex justify-around mt-[53px] bgbola items-center">

        <div>
          <h2 className="Link text-[28px] font-bold">{pags.position}</h2>
          <p className="text-[#9DAEC2] text-[16px] font-normal">So Digital Inc.</p>
        </div>


        <div>
          <a href={pags.website} className="bg-[#5964E0] w-[141px] h-12 text-white flex justify-center items-center text-[16px] font-bold rounded-[5px]">Apply Now</a>
        </div>

      </div>

    </div>
  )
}else return (
  <div>
    <div class="flex gap-4 w-[689px] h-[140px] ml-auto mr-auto mt-[-40px] bgola">
      <div class="skeleton h-[140px] w-[140px] rounded-none"></div>
      <div className="flex flex-col gap-4 h-[140px] justify-center">
        <div class="skeleton h-[20px] w-48 rounded-none"></div>
        <div class="skeleton h-5 w-28 rounded-none mb-8"></div>
      </div>
      <div>
      <div class="skeleton h-10 ml-32 mt-12 w-28 rounded-[5px] mb-8"></div>
      </div>
    </div>
    <div className="w-[730px] bgola pb-12 pl-12 pr-[43px] pt-12 mt-8 ml-auto mr-auto rounded-[5px]">

    <div className="flex justify-between">
    <div className="flex flex-col gap-4 h-[140px] justify-center">
        <div class="skeleton h-[20px] w-48 rounded-none"></div>
        <div class="skeleton h-5 w-56 rounded-none"></div>
        <div class="skeleton h-[20px] w-48 rounded-none"></div>
      </div>
      <div>
      <div class="skeleton h-10 ml-32 mt-12 w-28 rounded-[5px] mb-8"></div>
      </div>
    </div>
    <div class="skeleton h-[100px] mt-12 w-full rounded-[5px] "></div>
    <div class="skeleton h-[20px] w-48 rounded-sm mt-10 mb-7"></div>
    <div class="skeleton h-[100px] mt-12 w-full rounded-[5px] "></div>
    </div>
    
  </div>
)
}

export default Malumotlar