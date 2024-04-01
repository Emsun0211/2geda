/* eslint-disable react/prop-types */
// Education.jsx

import MainLayout from './Layout/MainLayout';
import { FaArrowLeftLong } from "react-icons/fa6";


const Education = () => {
    

    const popularExaminations = [
        {
            id: 1,
            acronomy: "JAMB",
            examBody: "Joint Admission and Matriculation Board",
            img: "/assets/JAMB.svg",
            link: "https://www.jamb.gov.ng/"
        },
        {
            id: 2,
            acronomy: "POST UTME",
            examBody: "University Entrance Examinations",
            img: "/assets/JAMB.svg",
            link: "https://www.jamb.gov.ng/"
        },
        {
            id: 3,
            acronomy: "WAEC",
            examBody: "West African Examination Council",
            img: "/assets/waec.svg",
            link: "https://www.waecnigeria.org/"
        },
        {
            id: 4,
            acronomy: "NECO",
            examBody: "National Examinational Council",
            img: "/assets/neco.svg",
            link: "https://neco.gov.ng/"
        },
    ]


    const resources = [
        {
            id: 1,
            about: "Nigerian Defence Academy entrance examination past questions 2012 to 2022",
            img: "/assets/nda.svg",
            link: "https://nda.edu.ng/"
        },
        {
            id: 2,
            about: "JAMB past questions 2012-2022",
            img: "/assets/JAMB.svg",
            link: "https://www.jamb.gov.ng/"
        },
        {
            id: 3,
            about: "LAUTECH Post-UTME screening form is out!",
            img: "/assets/LAUTECH.svg",
            link: "https://www.lautech.edu.ng/"
        },
        {
            id: 4,
            about: "UNILAG Post- UTME past questions 2012 to 2023",
            img: "/assets/unilag.svg",
            link: "https://unilag.edu.ng/"
        },
        {
            id: 5,
            about: "UI Post- UTME past questions 2012 to 2023",
            img: "/assets/ui.svg",
            link: "https://ui.edu.ng/"
        },
    ]

    const latestNews = [
        {
            id: 1,
            about: "UNILAG admission list first batch is out!",
            img: "/assets/unilag.svg",
            link: "https://unilag.edu.ng/"
        },
        {
            id: 2,
            about: "LAUTECH Post-UTME screening form is out",
            img: "/assets/LAUTECH.svg",
            link: "https://www.lautech.edu.ng/"
        },
        {
            id: 3,
            about: "WAEC 2023 result is out!",
            img: "/assets/waec.svg",
            link: "https://www.waecnigeria.org/"
        },
        {
            id: 4,
            about: "JAMB result 2023 is out!",
            img: "/assets/JAMB.svg",
            link: "https://www.jamb.gov.ng/"
        },
        {
            id: 5,
            about: "UI Post- UTME past questions 2012 to 2023",
            img: "/assets/ui.svg",
            link: "https://ui.edu.ng/"
        },
    ]

    const otherExaminations = [
        {
            id: 1,
            acronomy: "NDA",
            examBody: "Nigeria Defence Academy",
            img: "/assets/nda.svg",
            link: "https://nda.edu.ng/"
        },
        {
            id: 2,
            acronomy: "NABTEB",
            examBody: "National Business and Technical Examinations Board",
            img: "/assets/nabteb.svg",
            link: "https://nabteb.gov.ng/"
        },
        {
            id: 3,
            acronomy: "NIMASA",
            examBody: "Nigerian Maritime Administration and Safety Agency",
            img: "/assets/nimasa.svg",
            link: "https://nimasa.gov.ng/"
        },
        {
            id: 4,
            acronomy: "TRCN PQE",
            examBody: "Teachers Registration Council of Nigeria Professional Qualifying Examination",
            img: "/assets/trcn.svg",
            link: "https://trcn.gov.ng/"
        },
    ]
   
    return (
        <>
            <MainLayout>
                <section className=" ">
                    {/* {isModalOpen && <PostAdModal closeModal={closeModal} />} */}
                    <div className={`gap-4 md:flex md:justify-between `}>

                        <div className='bg-white md:w-[65%]  grid gap-8 rounded-md py-5 px-5'>
                            <div className='flex items-center gap-4'>
                                <FaArrowLeftLong />
                                <h1 className="text-[1rem] md:text-[1.5rem] font-bold ">Education</h1>
                            </div>
                            <div className='flex flex-col gap-5 justify-center items-center '>
                                <img src="/assets/advertise.svg"  alt="ads" className='object-cover w-full  h-full cursor-pointer rounded-xl' />
                                <div className='flex gap-2'>
                                <div className='w-8 rounded-full h-3 bg-[#4F0DA3]'></div>
                                <div className='w-3 rounded-[50%] h-3 border border-[#4F0DA3]'></div>
                                <div className='w-3 rounded-full h-3 border border-[#4F0DA3]'></div>
                                
                             </div>
                            </div>
                            

                            <div className='grid gap-4'>
                                <h2 className="text-[1rem] md:text-[1.2rem] font-bold ">Popular examinations</h2>
                                <div className='grid gap-5'>


                                    {
                                        popularExaminations.map(popularExamination => <PopularExaminationCard key={popularExamination.id} popularExamination={popularExamination}/>
                                           )
                                    }
                                </div>
                            </div>

                            <div className='my-3'>
                                <img src="/assets/quatar.svg" alt="" className='w-full h-full' />
                            </div>
                            

                            <div className='grid gap-2'>
                                <h2 className="text-[1rem] md:text-[1.2rem] font-bold ">Other Examinations</h2>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    {
                                        otherExaminations.map(otherExamination => {
                                            const { id, acronomy, examBody, img, link } = otherExamination
                                            return (
                                                <a href={link} target="_blank" rel="noopener noreferrer" key={id} className='no-underline text-black bg-[#D0D5DD] grid rounded-lg p-2 items-center gap-3 w-full text-center'>
                                                    <div className='w-[25%] mx-auto'>
                                                        <img src={img} alt="" className='w-[80%] h-full' />
                                                    </div>
                                                    <div className=''>
                                                        <h3 className='font-bold'>{acronomy}</h3>
                                                        <p className="font-semibold">{examBody}</p>
                                                    </div>
                                                </a>
                                            )
                                        })

                                    }

                                </div>
                            </div>


                        </div>

                        <div className='bg-white md:w-[35%] rounded-md pt-5 px-5'>

                            <div className="text-[1rem] md:text-[1.2rem] grid gap-3 ">
                                <h1 className="text-[1rem] md:text-[1.2rem] font-bold">Resources</h1>
                                {
                                    resources.map(resource => <ResourcesCard key={resources.id}  resource={resource}/>)

                                }

                            </div>
                            <div className="text-[1rem] md:text-[1.2rem] grid gap-3 ">
                                <h1 className="text-[1rem] md:text-[1.2rem] font-bold">Latest news</h1>
                                {
                                   latestNews.map(resource =>  <ResourcesCard key={resources.id}  resource={resource}/> )}

                            </div>

                            

                        </div>

                    </div>
                </section>

            </MainLayout>
        </>
    )
}

export default Education



function ResourcesCard({resource}){
 const { id, about, img, link } = resource
 return (
     <a href={link} target="_blank" rel="noopener noreferrer" key={id} className='flex flex-col items-center justify-center gap-2 px-2 py-3 mb-3 no-underline bg-gray-200 rounded-lg lg:justify-between lg:flex-row '>
         <div className='md:w-[20%] w-full flex justify-center items-center'>
             <img src={img} alt="" className='md:w-[80%] h-full' />
         </div>
         <div className='w-full md:w-[80%] flex items-center mx-auto justify-center'>
             <p className="text-[0.9rem] text-center md:text-left">{about}</p>
         </div>
     </a>
 )


}


function PopularExaminationCard({popularExamination}){
    {
        const { id, acronomy, examBody, img, link } = popularExamination
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" key={id} className=' leading-7 text-center sm:text-left  text-black no-underline bg-gray-200 rounded-lg flex items-center sm:flex-row flex-col gap-4 py-3 px-2'>
                <div className='sm:w-[10%] '>
                    <img src={img} alt="" className='object-cover w-full' />
                </div>
                <div className=''>
                    <h3 className='font-bold'>{acronomy}</h3>
                    <p className="text-[1.5rem]">{examBody}</p>
                </div>
            </a>
        )
    }
}