import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate, useOutletContext } from 'react-router-dom';
import img1 from '../../../assets/language.webp';

const Languages = () => {
    let number = 2;
    const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
    const navigate = useNavigate();

    function addNewLanguage() {
        number++;
        let newNode = document.createElement('input');
        newNode.classList.add('input');
        newNode.classList.add('input-bordered');
        newNode.classList.add('w-full');
        newNode.classList.add('mb-4');
        newNode.classList.add('h-14');
        newNode.classList.add('languages');
        newNode.setAttribute('type','text');
        newNode.setAttribute('placeholder', 'Languages');
        newNode.setAttribute('name', `languages_${number}`);

        let parentFrom = document.getElementById('languageId');
        parentFrom.appendChild(newNode)
    }

    // Get input field values and store
    let str = {
            name: "Languages",
            value: []
    };// store input values
    const getValue = () => {
        str.value = [];
        const languages = document.getElementsByClassName("languages");
        for (let e of languages) {
            str.value.push(e.value);
        }

        setUsersTemplateInfo([...usersTemplateInfo, str])
        navigate("/resume-builder/career-objective");
        console.log(str); 
    }


    return (
        <div className='px-12 py-12 bg-[#f4f7f8]'>
            <div className='flex'>
                {/* input section */}
                <div className="w-[100%] md:w-[70%] text-center">
                    <h1 className='text-accent text-xl md:text-4xl font-bold'>Are expert in many languages</h1>
                    <p className='text-slate-500 text-xs md:text-lg mt-2'>Please enter languages</p>
                    <div className='flex justify-center'>
                        <form id='languageId' className='mt-12 w-[100%] md:w-[80%]'>
                            <input name='languages_1' type="text" placeholder="Language" class="input input-bordered w-full mb-4 h-14 languages" /><br />
                            <input name='languages_2' type="text" placeholder="Language" class="input input-bordered w-full mb-4 h-14 languages" /><br />
                        </form>
                    </div>
                    {/* add extra input field dynamically */}
                    <div onClick={addNewLanguage} className='flex justify-center items-center text-accent hover:text-primary cursor-pointer'>
                        <AiOutlinePlusCircle className='mr-2 text-xl '/>
                        <p className='text-lg'> Add Languages</p>
                    </div>
                    {/* button */}
                    <div className='flex justify-center'>
                        <div className='w-[80%] flex justify-around items-center mt-10'>
                            <button onClick={()=>navigate('/resume-builder/additional-skills')} className='relative editor-btn inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all group md:px-24 px-10 text-lg rounded-lg border-[1px] border-solid border-gray-400 text-black'>Back</button>
                            <button onClick={getValue} className='relative inline-flex items-center justify-start  py-3 overflow-hidden font-medium transition-all bg-primary group md:px-24 px-10 text-lg rounded-lg text-white hover:bg-[#3ba6d4]'>Continue</button>
                        </div>
                    </div>
                </div>
                {/* Tips section */}
                <div className='md:w-[30%] hidden md:block'>
                    <div>
                        <img src={img1} style={{width:"100%"}} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl my-3'>How to set Languages</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus eius magnam qui eaque adipisci, facere asperiores laboriosam quae suscipit sub.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;