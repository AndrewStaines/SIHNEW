import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import img from '../assets/pic.png'
import {FaGear} from 'react-icons/fa6'
import {FaArrowRightToBracket} from 'react-icons/fa6'
import {FaComments} from 'react-icons/fa6'
import {FaHeart} from 'react-icons/fa6'
import '../components/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from './Message';
function Home() {
	const [abstract, setabstract] = useState([]);
	const [desc, setdesc] = useState("");
	const [title, settitle] = useState("");
	const handleOnSubmit = async (e) => {
		let result = await fetch(
			'http://localhost:2000/register', {
			method: "post",
			body: JSON.stringify({ abstract, desc, title }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		if (result) {
			alert("Data saved succesfully");
			setabstract("")
			setdesc("")
			settitle("")
		}

	}
	const [showmsg, Setshowmsg]=useState(false);
	const [showcsm,Setshowcsm]=useState(false)
	const [showmsg1, Setshowmsg1]=useState(true);
	const [showcsm1,Setshowcsm1]=useState(true)
	const handleMessage= async()=>{
		Setshowmsg(!showmsg);
		Setshowcsm(!showcsm)
		Setshowcsm1(!showcsm1)
		if(showcsf){
			Setshowcsf(!showcsf)
		Setshowcsf1(!showcsf1)
		}
		if(showcss){
			Setshowcss(!showcss)
		Setshowcss1(!showcss1)
		}

	}
	const handleMessage1= async()=>{
		Setshowmsg1(!showmsg1);
		Setshowmsg(!showmsg);
		Setshowcsm(!showcsm)
		Setshowcsm1(!showcsm1)
	}
	const [showfav, Setshowfav]=useState(false);
	const [showcsf,Setshowcsf]=useState(false)
	const [showfav1, Setshowfav1]=useState(true);
	const [showcsf1,Setshowcsf1]=useState(true)
	const handleFav= async()=>{
		Setshowfav(!showfav);
		Setshowcsf(!showcsf)
		Setshowcsf1(!showcsf1)
		if(showcsm){
			Setshowcsm(!showcsm)
		Setshowcsm1(!showcsm1)
		Setshowmsg(!showmsg);
		}
		if(showcss){
			Setshowcss(!showcss)
		Setshowcss1(!showcss1)
		}

	}
	const handleFav1= async()=>{
		Setshowfav1(!showfav1);
		Setshowfav(!showfav);
		Setshowcsf(!showcsf)
		Setshowcsf1(!showcsf1)
	}
	const [showset, Setshowset]=useState(false);
	const [showcss,Setshowcss]=useState(false)
	const [showset1, Setshowset1]=useState(true);
	const [showcss1,Setshowcss1]=useState(true)
	const handleSet= async()=>{
		Setshowset(!showset);
		Setshowcss(!showcss)
		Setshowcss1(!showcss1)
		if(showcsm){
			Setshowcsm(!showcsm)
		Setshowcsm1(!showcsm1)
		Setshowmsg(!showmsg);
		}
		if(showcsf){
			Setshowcsf(!showcsf)
		Setshowcsf1(!showcsf1)
		}

	}
	const handleSet1= async()=>{
		Setshowset1(!showset1);
		Setshowset(!showset);
		Setshowcss(!showcss)
		Setshowcss1(!showcss1)
	}
	return (
		// 		<center>
		// 			<div className='bg-primary.bg-gradient'>
		// 				<h1>Ministry Of Ayush</h1>
		// 				<div className='content'>
		// 					<form action="">
		// 					<div className="mb-3">
		//   <label for="formFile" className="form-label">Abstract</label><br/>
		//   <input className="form-control" type="file" id="formFile" value={abstract} onChange={(e) => setabstract(e.target.value)}></input>
		// </div>
		// <input type="text"value={domain} onChange={(e) => setdom(e.target.value)} placeholder='Domain of the Paper' id='0'></input><br/><br/>
		// 						<div className="mb-2">
		//   <label for="exampleFormControlTextarea1" className="form-label">Description</label><br/>
		//   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(e) => setdesc(e.target.value)}></textarea>
		// </div>
		// 						<div className=''>
		// 						<input type="button" value="Post" className='bg-[#4461F2] text-xl px-6 py-3 font-bold my-12 rounded-lg w-full text-white shadow-xl cursor-pointer hover:shadow-[#4461f280]' onClick={handleOnSubmit} />
		// 						</div>
		// 					</form>
		// 				</div>
		// 			</div>

		// 		</center>
		<>
			<div className='flex w-screen h-screen overflow-y-hidden'>
				<div className=' w-1/5 h-full '>
					<img src={img} alt="" className='absolute h-12 mt-4 ml-4' />
				<h1 className='absolute text-white ml-20 mt-4'>Username</h1>
					<div className='absolute flex flex-col gap-8 ml-20 mt-36 text-black'>
					{showcsm && (
        				<div>
          					<button className='flex flex-row gap-2 cursor-pointer shadow-xl text-white border-2 rounded-full p-4 shadow-black text-4xl ' onClick={handleMessage1} ><FaComments/>Messages</button>
       	 				</div>
      				)}
					{showcsm1 && (
        				<div>
						<button className='flex flex-row gap-2 cursor-pointer shadow-xl shadow-[#009c00] hover:text-white hover:border-2 hover:rounded-full p-4 hover:shadow-black text-4xl ' onClick={handleMessage} ><FaComments/>Messages</button>
       	 				</div>
      				)}
					{showcsf && (
        				<div>
						<button className='flex flex-row gap-2 cursor-pointer shadow-xl text-white border-2 rounded-full p-4 shadow-black text-4xl ' onClick={handleFav1}   ><FaHeart/>Favourites</button>
       	 				</div>
      				)}
					{showcsf1 && (
        				<div>
						<button className='flex flex-row gap-2 cursor-pointer shadow-xl shadow-[#009c00] hover:text-white hover:border-2 hover:rounded-full p-4 hover:shadow-black text-4xl ' onClick={handleFav}   ><FaHeart/>Favourites</button>
       	 				</div>
      				)}
					{showcss && (
        				<div>
<button className='flex flex-row gap-2 cursor-pointer shadow-xl text-white border-2 rounded-full p-4 shadow-black text-4xl ' onClick={handleSet1}  ><FaGear/>Settings</button>       	 				</div>
      				)}
					{showcss1 && (
        				<div>
<button className='flex flex-row gap-2 cursor-pointer shadow-xl shadow-[#009c00] hover:text-white hover:border-2 hover:rounded-full p-4 hover:shadow-black text-4xl ' onClick={handleSet}  ><FaGear/>Settings</button>       	 				</div>
      				)}
						<button className='flex flex-row gap-2 cursor-pointer shadow-xl shadow-[#009c00] hover:text-white hover:border-2 hover:rounded-full p-4 hover:shadow-black text-4xl '  ><FaArrowRightToBracket/>Logout</button>
					</div>
					<div className='h-full w-6/6 bg-[#009c00] rounded-b-full ' />
				</div>
				<div className='flex flex-col'>
				<div className='flex flex-row'>
				<input type="search" name="" className="search mx-24 bg-[#EAF0F7] px-14 text-xl py-3 rounded-lg h-12 mt-4 w-fit focus:outline-none  border-2 border-black" placeholder="⌕   Search" id="" />
				<select placeholder="Name" class="bg-[#EAF0F7] px-4 text-xl mt-4 h-12 rounded-lg focus:outline-none border-2 border-black" >
                            <option value="">Category</option>
                            <option value="startups">Ayurvaedha</option>
                            <option value="investors">Yoga</option>
                            <option value="knowledge_partner">Unani</option>
                            <option value="knowledge_partner">Siddha</option>
                            <option value="knowledge_partner">Homeopathy</option>
                        </select>
				</div>
				
				{showmsg && (
        <div>
          <Message/>
        </div>
      )}
				</div>
			</div></>
	);
}

export default Home