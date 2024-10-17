
// import { Prabhadevi } from "./Comp/Prabhadevi";
// import { Rabale } from "./Comp/Rabale";
// import { OfficeLocation } from "./Comp/OfficeLocation";
// import React ,{ useState } from "react";

// export function Learning(){
//     let companyName ="Neosoft";
//     let joinLoc = "Prabhadevi";
//     let compOffice=['Dadar' ,'Rabale' ,'Prabhadevi' , 'Ahemdabad'];
//     const liNodes=compOffice.map((city,i)=><li key={'c'+i}>{city}</li>)

//     let offices= [
//         {
//             location:'Dadar, Mumbai',
//             address:'The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028'
//         },
//         {
//             location:'Rabale, Mumbai',
//             address:'Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701'
//         }, 
//         {
//             location:'Parel, Mumbai',
//             address:'Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013'
//         },
//         {
//             location:'Pune',
//             address:'IT-09, 10th Floor, Blue Ridge SEZ, Hinjewadi, Pune, Maharashtra 411057'
//         },
//         {
//             location:'Noida',
//             address:'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301'
//         },
//     ]

// // let officeTemplate = offices.map((office)=><OfficeLocation office={office}></OfficeLocation>)

// // let officeTemplate=offices.map((office ,i)=><OfficeLocation  key={i} office={office}></OfficeLocation>) 
// let officeTemplate = offices.filter((office)=>office.location.toLowerCase().includes('mumbai')).map((office ,i)=><OfficeLocation  key={i} office={office}></OfficeLocation>) ;
// //   
// // let officeTemplate = offices
// //         .filter((office) => office.location.toLowerCase().includes('mumbai'))
// //         .map((office, i) => <OfficeLocation key={i} office={office} />);

// let [compStyle,setStyle] =useState({
//     backgroundColor : 'blue',
//     color  :"yellow",
//     textAlign :'center'});

// function test(){
//     console.log(" inside Test function");
    
// }
// function chanageBg(bgColor){
//    setStyle({  ...compStyle ,backgroundColor : bgColor})
// }
// let styleclasses= ['text-success' , 'border' ,"border-info"];
// return(
//         <>
//             <h3 style={compStyle} onMouseOver={()=>{setStyle({...compStyle ,backgroundColor: "green"})}} onMouseOut={()=>{chanageBg("yellow")}}>{companyName}</h3>
//             <button className="btn btn-info" onClick={test}> click</button>
//             {
//                 joinLoc.toLowerCase()==='rabale' ?
              
//                     <address>
//                      Unit No 501, Sigma IT Park, Plot No R-203,204,
//                      Midc TTC Industrial Area. Rabale, Navi Mumbai, 
//                      Maharashtra 400701
//                      </address> :
//                   <address>
//                     9th floor, Business arcade, Sayani Rd, 
//                     Parel Bus Depot, Dighe Nagar, Prabhadevi, Mumbai,
//                      Maharashtra 400025
//                      </address>
                     

//             }
        
//             <p>
//                 <h4>If-Then </h4>
//                 {
//                     joinLoc.toLowerCase() === 'prabhadevi' &&
//                     <address>
//                      9th floor, Business arcade, Sayani Rd, 
//                     Parel Bus Depot, Dighe Nagar, Prabhadevi, Mumbai,
//                      Maharashtra 400025
//                     </address>
//                 }
//             </p>

//             <p>
//                 <h4 className={styleclasses.join(" ")}> If - Else using component</h4>
//                     {joinLoc.toLowerCase() === 'rabale' ? <Rabale/> : <Prabhadevi/>}
//                 </p>

//                 <div>  Compeny Office 
//                 <ol>
//                     {compOffice.map((comp , i)=> <li key ={'0'+i}>{comp}</li>)}
//                     </ol>
                    

//                 </div>
//                 <div>  Compeny Office 2
//                    <ol>

//                     {liNodes}
//                    </ol>
                
//                 </div>


                    
               
//                 <section>
//                     {officeTemplate}
//                 </section>
                
              
//         </>
//     );
// }

//  export default Learning();


import React, { useEffect, useState ,useRef} from "react";
import { Prabhadevi } from "./Comp/Prabhadevi";
import { Rabale } from "./Comp/Rabale";
import { OfficeLocation } from "./Comp/OfficeLocation";

export function Learning() {
    const companyName = "Neosoft";
    const joinLoc = "Prabhadevi";
    const [compOffice , setOffice] = useState(['Dadar', 'Rabale', 'Prabhadevi', 'Ahemdabad']);
    let officenode =useRef();
    let addOff= useRef();
    
    const liNodes = compOffice.map((city, i) => <li key={'c' + i}>{city}</li>);
    // const liNodes = Array.isArray(compOffice) 
    //     ? compOffice.map((city, i) => <li key={'c' + i}>{city}</li>)
    //     : null;
    const [compStyle, setStyle] = useState({
        backgroundColor: 'grey',
        color: "yellow",
        textAlign: 'center'
    });

    let l1 = useRef(compOffice.length);
    let l2 =0;
        useEffect(()=>{
        console.log( " u can do work after component rerender");  
        console.log("new Len" ,l2=compOffice.length);
        console.log( "old len" ,l1.current);
        console.log(l2-l1.current);
        


        return ()=>{
        //    l1.current = compOffice.length;
           console.log(l1.current ," old");       
            // console.log( "diff : ",l2-l1);
            
        }

     } ,[compOffice])



     let [offices1,setOffices1]=useState(()=>initialArray()); 
     

    // console.log(compStyle);

    const offices = [
        {
            location: 'Dadar, Mumbai',
            address: 'The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028'
        },
        {
            location: 'Rabale, Mumbai',
            address: 'Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701'
        },
        {
            location: 'Parel, Mumbai',
            address: 'Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013'
        },
        {
            location: 'Pune',
            address: 'IT-09, 10th Floor, Blue Ridge SEZ, Hinjewadi, Pune, Maharashtra 411057'
        },
        {
            location: 'Noida',
            address: 'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301'
        },
    ];

    function addOffice(office){
        // setOffice(...compO';;;ffice , office);
        setOffice((compOffice) => [...compOffice, office]);

        // setOffice((office)=>[...compOffice , office]);
    }
    const officeTemplate = offices
        .filter((office) => office.location.toLowerCase().includes('mumbai'))
        .map((office, i) => <OfficeLocation key={i} office={office} />);
        
        const officeTemplate1 = offices1
        // .filter((office) => office.location.toLowerCase().includes('mumbai'))
        .map((office, i) => <OfficeLocation key={i} office={office} />);

    function test() {
        console.log("inside Test function");
    }

    function changeBg(bgColor) {
        setStyle({ ...compStyle, backgroundColor: bgColor });
    }
    
    function filter1(loc){

        if(loc == 'all'){
            setOffices1(initialArray);
        }
       else{
        let aloc = offices1.filter((office)=>office.location.toLowerCase().includes(loc.toLowerCase()))
    //    aloc= offices1
    //     .filter((office) => office.location.toLowerCase().includes(loc.toLowerCase()))
    //     .map((office, i) => <OfficeLocation key={i} office={office} />);

        setOffices1(aloc);}
    }
    function initialArray() {
        return [
        {
            location: 'Dadar, Mumbai',
            address: 'The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028'
        },
        {
            location: 'Rabale, Mumbai',
            address: 'Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701'
        },
        {
            location: 'Parel, Mumbai',
            address: 'Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013'
        },
        {
            location: 'Pune',
            address: 'IT-09, 10th Floor, Blue Ridge SEZ, Hinjewadi, Pune, Maharashtra 411057'
        },
        {
            location: 'Noida',
            address: 'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301'
        },
    ];
}

    const styleclasses = ['text-success', 'border', "border-info"];

    return (
        <>
            <h3
                style={compStyle}
                onMouseOver={() => setStyle({ ...compStyle, backgroundColor: "green" })}
                onMouseOut={() => changeBg("grey")}
            >
                {companyName}
            </h3>
            <button className="btn btn-info" onClick={test}>Click</button>
            {
                joinLoc.toLowerCase() === 'rabale' ?
                    <address>
                        Unit No 501, Sigma IT Park, Plot No R-203,204,
                        Midc TTC Industrial Area. Rabale, Navi Mumbai,
                        Maharashtra 400701
                    </address> :
                    <address>
                        9th floor, Business arcade, Sayani Rd,
                        Parel Bus Depot, Dighe Nagar, Prabhadevi, Mumbai,
                        Maharashtra 400025
                    </address>
            }

            <div>
                <h4>If-Then</h4>
                {
                    joinLoc.toLowerCase() === 'prabhadevi' &&
                    <address>
                        9th floor, Business arcade, Sayani Rd,
                        Parel Bus Depot, Dighe Nagar, Prabhadevi, Mumbai,
                        Maharashtra 400025
                    </address>
                }
            </div>

            <div>
                <h4 className={styleclasses.join(" ")}>If - Else using component</h4>
                {joinLoc.toLowerCase() === 'rabale' ? <Rabale /> : <Prabhadevi />}
            </div>

            <div>Company Office
                <ol>
                    {compOffice.map((comp, i) => <li key={'0' + i}>{comp}</li>)}
                </ol>
            </div>

            <div>Company Office 2
                <ol>
                    {liNodes}
                </ol>
            </div>



            <input type="text" defaultValue="" ref = {addOff} />
            <button onClick={()=>{addOffice(addOff.current.value)}}>Add loc</button>


            <section className="d-flex ">
                {officeTemplate}
            </section>

          <label> Enter location</label>
          <select ref={officenode} onChange={() => filter1(officenode.current.value)}>
                <option value="">Select an office</option>
                <option >all</option>
                {offices1.map((office, i) => <option key={i} value={office.location}>{office.location}</option>)}
                   
                </select>
                <button onClick={()=> setOffices1(initialArray())}> Reset </button>
                <section className="d-flex flex-wrap justify-content-between">
                {officeTemplate1}
            </section>

                Gender
            <div style={{width : "100px"}}>

            </div>
        </>



    );
}

export default Learning;
