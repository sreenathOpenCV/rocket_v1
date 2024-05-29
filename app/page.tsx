"use client";

import Cards from '@/components/Cards';
import SearchBar from '@/components/SearchBar';
import { useFetchAllDataMutation } from '@/services/jobServices';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';

interface JobItem {
  company_name: string;
  country: string;
  job_title: string;
  link: string;
  location: string;
  logo: string;
  tags: string[];
}

export default function Home() {
  const [fetchData, { isLoading, isError, data, error }] = useFetchAllDataMutation();
  const [paramData, setParamData] = useState<any>({});
  const [items, setItems] = useState<JobItem[]>([]);
  const [searchParams, setSearchParams] = useState<any>();
  const [page, setPage] = useState(1);
  const [systemError, setSystemError] = useState(false);
  const [openPopupIndex, setOpenPopupIndex] = useState<number | null>(null);

  const handleTogglePopup = (index: number) => {
    setOpenPopupIndex(openPopupIndex === index ? null : index);
  };

  const handleGetData = async (paramData: any, page: number) => {
    try {
      if (Object.keys(paramData).length !== 0) {
        const response = await fetchData({ data: paramData, page }).unwrap();
        setSearchParams(paramData);
        setParamData(response);
        setItems(response.items);
        setPage(page);
        if (response.statusCode === 502) {
          setSystemError(true);
        } else {
          setSystemError(false);
        }
      }
    } catch (err) {
      console.error("Error posting user:", err);
      setSystemError(true);
    }
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    handleGetData(searchParams, value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (paramData.items) {
      setItems(paramData.items);
    }
  }, [paramData]);

  return (
    <main className="relative text-[#1e1e1e] flex min-h-screen w-full justify-center bg-white text-center">
      <div className='fixed top-0 right-0'>
        <img src={"/Corner.png"} alt="cornerImage" />
      </div>
      <div className='mt-24 w-full flex flex-col items-center'>
        <div className='my-10 px-2'>
          <h1 className='text-4xl font-bold px-4 text-[#1e1e1e] 3xl:w-[1600px] 2xl:w-[1200px] xl:w-[1140px] lg:w-[1024px] md:w-[767px] sm:min-w-screen max-sm:min-w-screen md: mx-auto'>
            Your One-Stop Destination for Computer Vision Jobs
          </h1>
          <p className='text-md text-[#1e1e1e] my-2'>Discover top opportunities in computer vision. Streamline your job search with our curated listings and expert resources.</p>
        </div>
        <div className="bg-gray-100 w-full flex justify-center text-center">
          <div className='3xl:w-[1600px] 2xl:w-[1200px] xl:w-[1140px] lg:w-[1024px] md:w-[767px] sm:w-full max-sm:w-full px-1'>
            <SearchBar handleGetData={(data: any) => handleGetData(data, 1)} />
          </div>
        </div>    
        {isLoading ? (
          <div className='relative flex justify-center items-center mt-24'>
            <div className='absolute'>
              <img src="loader.gif" alt="loading please wait" className='w-[150px] h-auto' />
            </div>
          </div>
        ) : (
          <>
            <div className="bg-gray-100 w-full flex justify-center text-center my-4 pt-4 ">
              {systemError ? (
                <div className="h-full flex flex-col justify-center items-center">
                  <h1 className="text-5xl font-bold text-black mb-4 w-full">The server is down, we will be back soon...!</h1>
                  <img src="/wired-lineal-1008-travel-agency.gif" alt="server down" className="h-40 mb-10"/>
                </div>
              ) : items.length === 0 ? (
                <div className="h-full flex flex-col justify-center items-center">
                  <h1 className="text-5xl font-bold text-black mb-4 w-full">No data available in this area</h1>
                  <img src="/wired-lineal-1008-travel-agency.gif" alt="no data available" className="h-40 mb-10"/>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-2 p-2 3xl:w-[1600px] 2xl:w-[1200px] xl:w-[1140px] lg:w-[1024px] md:w-[767px] sm:min-w-screen max-sm:min-w-screen flex justify-around text-center items-center">
                  {items.map((item, index) => (
                    <Cards
                      key={index}
                      company_name={item.company_name}
                      country={item.country}
                      job_title={item.job_title}
                      link={item.link}
                      location={item.location}
                      logo={item.logo}
                      tags={item.tags}
                      isOpen={openPopupIndex === index}
                      onTogglePopup={() => handleTogglePopup(index)}
                    />
                  ))}
                </div>
              )}
            </div>
            {items.length > 0 && (
              <div className='relative flex justify-center items-center my-6'>
                <div className='relative'>
                  <Pagination count={paramData.pages} color="primary" page={page} onChange={handlePageChange} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
