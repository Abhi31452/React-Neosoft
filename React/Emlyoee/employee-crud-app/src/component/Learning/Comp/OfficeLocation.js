// export function OfficeLocation(){
//     return(
//         <article  className="border border-5">  
//          <h4> Dadar ,Mumbai (HeadQuater) </h4>
//          <address>
//          The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028
//          </address>
         
//          </article>

//     );
// }

// export default OfficeLocation();

export function OfficeLocation({office} ){
    return (
        <article className="border border-5 p-3 w-25 bg-secondary">
            <header>
                <h4>
                    {office.location}</h4>
            </header>
            <address>
           { office.address}                                                                                                                                                                                                                                                               `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           `.address}
            </address>
        </article>
    );
}