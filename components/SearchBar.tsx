import React, { useEffect, useState } from 'react';
import MultipleSelectChip from './MultipleSelectChip';
import { useFetchSkillsQuery, useFetchCountryQuery } from '@/services/paramServices';
import { RxReset } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";

interface ParamData {
  country_names: string[];
  tags: string[];
}

const SearchBar = ({ handleGetData }: any) => {
  const [jobPlace, setJobPlace] = useState<string[]>([]);
  const [place, setPlace] = useState<string[]>([]);
  const [paramData, setParamData] = useState<ParamData>({
    country_names: [],
    tags: [],
  });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const { data: areaOfInterestOptions = [] } = useFetchSkillsQuery(undefined);
  const { data: names = [] } = useFetchCountryQuery(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleGetData({
      country_names: place,
      tags: jobPlace,
    }, 1);
    setOpenDropdown(null);
    console.log('Form submitted with:', { jobPlace, place });
  };

  const getApi = async () => {
    try {
      const response = await fetch('http://ip-api.com/json/');
      if (!response.ok) {
        throw new Error(`Error fetching IP info: ${response.statusText}`);
      }
      const data: { country: string } = await response.json();
      setPlace([data.country]);
      setParamData({
        country_names: [data.country],
        tags: [],
      });
      handleGetData({
        country_names: [data.country],
        tags: jobPlace,
      }, 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="flex flex-col py-6 w-[100%]">
      <form onSubmit={handleSubmit} className="bg-white border items-center justify-between w-full flex rounded-lg shadow-lg mb-5 z-10 top-2 shadow-2xl">
        <div className='flex flex-col md:flex-row w-full p-2'>
          <div className='flex flex-col md:flex-row  w-full md:w-5/6 md:px-2 md:space-x-1'>
            <MultipleSelectChip 
              options={areaOfInterestOptions} 
              selectedOptions={jobPlace} 
              setSelectedOptions={setJobPlace} 
              label="Skills"
              isOpen={openDropdown === 'jobPlace'}
              toggleDropdown={() => setOpenDropdown(openDropdown === 'jobPlace' ? null : 'jobPlace')}
            />
            <MultipleSelectChip 
              options={names} 
              selectedOptions={place} 
              setSelectedOptions={setPlace} 
              label="Country"
              isOpen={openDropdown === 'place'}
              toggleDropdown={() => setOpenDropdown(openDropdown === 'place' ? null : 'place')}
            />          
          </div>
          <div className='flex flex-row my-4 gap-4 w-full md:w-1/6'>
            <button type="submit" className="bg-[#138dff] w-1/2 p-2 hover:bg-blue-400 cursor-pointer rounded-lg flex justify-center items-center">
            <h1 className='text-white font-bold px-4'><IoSearchSharp style={{color:"white"}} fontSize={"2rem"}/></h1>
            </button>
            <button type="button" onClick={() => { setJobPlace([]); setPlace([]); setOpenDropdown(null); }} className="items-center md:mr-3 rounded-lg w-1/2 bg-[#138dff] cursor-pointer flex justify-center">
              <h1 className='text-white font-bold px-4'><RxReset fontSize={"2rem"}/></h1>
            </button>          
          </div>          
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
