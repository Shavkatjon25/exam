import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App';
import Malumotlar from './Malumotlar';
const router=createBrowserRouter([
    {
       path:'/',
       element:<App/> 
    },
    {
        path:'/pags/:id',
        element:<Malumotlar/>
    }
])

function Heder() {
    const [count, setCount]=useState(true);
  return (
     <div className={`bgota min-h-[100vh]  ${count ? 'rang':""}`}>   
 
                    <div className=" w-[1440px]  h-40 rasm mr-auto ml-auto">

                            <div className=' absolute w-[1440px]  h-40 rasm flex justify-between px-[165px] pt-[45px] mr-auto ml-auto'>
                                <div className='w-32'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="115" height="32" viewBox="0 0 115 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4496 23.5485C9.57942 23.9023 8.63373 24.0792 7.61248 24.0792C6.15355 24.0792 4.84833 23.7228 3.69682 23.0099C2.54531 22.297 1.64129 21.3201 0.984776 20.0792C0.328259 18.8383 0 17.4257 0 15.8416C0 14.2574 0.328259 12.8449 0.984776 11.604C1.64129 10.363 2.54531 9.38614 3.69682 8.67327C4.84833 7.9604 6.15355 7.60396 7.61248 7.60396C8.59204 7.60396 9.50387 7.7703 10.348 8.10297C11.1921 8.43564 11.9424 8.89769 12.5989 9.48911V0H17.1007V23.7624H12.849L12.7396 22.0515C12.083 22.6957 11.3197 23.1947 10.4496 23.5485ZM5.78361 18.899C6.53391 19.7122 7.48222 20.1188 8.62852 20.1188C9.77482 20.1188 10.7231 19.7122 11.4734 18.899C12.2237 18.0858 12.5989 17.0667 12.5989 15.8416C12.5989 14.6165 12.2237 13.5974 11.4734 12.7842C10.7231 11.971 9.77482 11.5644 8.62852 11.5644C7.48222 11.5644 6.53391 11.971 5.78361 12.7842C5.0333 13.5974 4.65815 14.6165 4.65815 15.8416C4.65815 17.0667 5.0333 18.0858 5.78361 18.899ZM28.8868 24.0792C29.9705 24.0792 31.1038 23.8997 32.2866 23.5406C33.4694 23.1815 34.6652 22.5215 35.874 21.5604L33.1541 18.2653C32.5706 18.8251 31.9219 19.2818 31.208 19.6356C30.4942 19.9894 29.5954 20.1663 28.5116 20.1663C27.5008 20.1663 26.6176 19.8918 25.8621 19.3426C25.1066 18.7934 24.5881 18.0805 24.3068 17.204H36.4993V15.8257C36.4993 14.231 36.1449 12.8158 35.4363 11.5802C34.7277 10.3446 33.7612 9.37294 32.5367 8.66535C31.3122 7.95776 29.9132 7.60396 28.3397 7.60396C26.7557 7.60396 25.3411 7.9604 24.0958 8.67327C22.8505 9.38614 21.8683 10.3578 21.1492 11.5881C20.4302 12.8185 20.0707 14.2205 20.0707 15.7941C20.0707 17.3888 20.4458 18.8119 21.1961 20.0634C21.9464 21.3149 22.9833 22.297 24.3068 23.0099C25.6302 23.7228 27.1569 24.0792 28.8868 24.0792ZM24.213 14.6693H31.8724C31.6535 13.7399 31.2054 12.9901 30.5281 12.4198C29.8507 11.8495 29.0379 11.5644 28.0896 11.5644C27.1308 11.5644 26.2998 11.8548 25.5964 12.4356C24.893 13.0165 24.4318 13.7611 24.213 14.6693ZM54.319 7.92079H49.5827L46.9723 15.6356C46.8264 16.0581 46.657 16.6495 46.4643 17.4099C46.2715 18.1703 46.1125 18.862 45.9875 19.4851H45.925C45.8208 18.862 45.6775 18.165 45.4951 17.3941C45.3127 16.6231 45.1486 16.037 45.0027 15.6356L42.1734 7.92079H37.2808L43.7678 23.7624H48.1446L54.319 7.92079ZM60.212 4.37228C59.7535 4.83696 59.1491 5.06931 58.3988 5.06931C57.6485 5.06931 57.0441 4.83696 56.5856 4.37228C56.127 3.90759 55.8978 3.29505 55.8978 2.53465C55.8978 1.77426 56.127 1.16172 56.5856 0.69703C57.0441 0.232343 57.6485 0 58.3988 0C59.1491 0 59.7535 0.232343 60.212 0.69703C60.6706 1.16172 60.8998 1.77426 60.8998 2.53465C60.8998 3.29505 60.6706 3.90759 60.212 4.37228ZM54.8817 32C56.7471 32 58.1748 31.4957 59.1647 30.4871C60.1547 29.4785 60.6497 28.0343 60.6497 26.1545V7.92079H56.1479V25.6317C56.1479 26.3815 55.9108 26.9703 55.4367 27.398C54.9625 27.8257 54.3607 28.0396 53.6312 28.0396C53.0893 28.0396 52.5318 27.9182 51.9587 27.6752V31.4139C52.9487 31.8046 53.923 32 54.8817 32ZM75.9997 23.0099C74.7492 23.7228 73.3216 24.0792 71.7167 24.0792C70.1119 24.0792 68.6816 23.7228 67.4259 23.0099C66.1702 22.297 65.1802 21.3201 64.456 20.0792C63.7317 18.8383 63.3696 17.4257 63.3696 15.8416C63.3696 14.2574 63.7317 12.8449 64.456 11.604C65.1802 10.363 66.1702 9.38614 67.4259 8.67327C68.6816 7.9604 70.1119 7.60396 71.7167 7.60396C73.3216 7.60396 74.7492 7.9604 75.9997 8.67327C77.2502 9.38614 78.2376 10.363 78.9619 11.604C79.6861 12.8449 80.0482 14.2574 80.0482 15.8416C80.0482 17.4257 79.6861 18.8383 78.9619 20.0792C78.2376 21.3201 77.2502 22.297 75.9997 23.0099ZM71.7167 20.1188C70.5704 20.1188 69.6221 19.7122 68.8718 18.899C68.1215 18.0858 67.7464 17.0667 67.7464 15.8416C67.7464 14.6165 68.1215 13.5974 68.8718 12.7842C69.6221 11.971 70.5704 11.5644 71.7167 11.5644C72.863 11.5644 73.8113 11.971 74.5616 12.7842C75.3119 13.5974 75.6871 14.6165 75.6871 15.8416C75.6871 17.0667 75.3119 18.0858 74.5616 18.899C73.8113 19.7122 72.863 20.1188 71.7167 20.1188ZM96.4299 23.0099C95.2836 23.7228 93.9758 24.0792 92.5065 24.0792C91.4956 24.0792 90.5525 23.9023 89.6772 23.5485C88.8018 23.1947 88.0359 22.6957 87.3794 22.0515L87.2699 23.7624H83.0182V0H87.5201V9.48911C88.1766 8.89769 88.9269 8.43564 89.771 8.10297C90.6151 7.7703 91.5269 7.60396 92.5065 7.60396C93.9758 7.60396 95.2836 7.9604 96.4299 8.67327C97.5762 9.38614 98.4776 10.363 99.1342 11.604C99.7907 12.8449 100.119 14.2574 100.119 15.8416C100.119 17.4257 99.7907 18.8383 99.1342 20.0792C98.4776 21.3201 97.5762 22.297 96.4299 23.0099ZM91.4904 20.1188C90.3441 20.1188 89.3958 19.7122 88.6455 18.899C87.8952 18.0858 87.5201 17.0667 87.5201 15.8416C87.5201 14.6165 87.8952 13.5974 88.6455 12.7842C89.3958 11.971 90.3441 11.5644 91.4904 11.5644C92.6367 11.5644 93.585 11.971 94.3353 12.7842C95.0856 13.5974 95.4608 14.6165 95.4608 15.8416C95.4608 17.0667 95.0856 18.0858 94.3353 18.899C93.585 19.7122 92.6367 20.1188 91.4904 20.1188ZM111.905 23.4851C110.967 23.8812 109.93 24.0792 108.794 24.0792C107.721 24.0792 106.609 23.8891 105.457 23.5089C104.306 23.1287 103.204 22.5426 102.151 21.7505L104.277 18.3129C105.173 18.9149 105.999 19.3927 106.754 19.7465C107.51 20.1003 108.185 20.2772 108.779 20.2772C109.237 20.2772 109.607 20.1716 109.889 19.9604C110.17 19.7492 110.311 19.4799 110.311 19.1525C110.311 18.6772 110.047 18.2917 109.521 17.996C108.995 17.7003 108.388 17.4099 107.7 17.1248C106.971 16.8185 106.239 16.4726 105.504 16.0871C104.769 15.7017 104.154 15.2026 103.659 14.5901C103.164 13.9776 102.917 13.1855 102.917 12.2139C102.917 10.8726 103.441 9.76898 104.488 8.90297C105.535 8.03696 107.018 7.60396 108.935 7.60396C109.873 7.60396 110.86 7.72277 111.897 7.9604C112.934 8.19802 113.88 8.58086 114.734 9.10891L112.749 12.5782C112.291 12.2719 111.694 12 110.959 11.7624C110.225 11.5248 109.602 11.4059 109.091 11.4059C108.8 11.4059 108.479 11.4667 108.13 11.5881C107.781 11.7096 107.606 11.9446 107.606 12.2931C107.606 12.6838 107.849 13.0059 108.333 13.2594C108.818 13.5129 109.394 13.7716 110.06 14.0356C110.78 14.3208 111.519 14.6561 112.28 15.0416C113.041 15.4271 113.684 15.9393 114.211 16.5782C114.737 17.2172 115 18.0541 115 19.0891C115 20.1241 114.719 21.0165 114.156 21.7663C113.593 22.5162 112.843 23.0891 111.905 23.4851Z" fill="white"/>
                                        </svg>
                                </div>
                                <div className=' flex gap-2 w-32'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24. 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                                    <input type="checkbox" className="toggle"  onClick={()=>setCount(!count)}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
                                </div>
                            </div>
                        <div>
                            <img src="Group 10.svg" alt="" />
                        </div>
    
                    </div>
  
        <RouterProvider router={router} />
    </div>
  )
}

export default Heder