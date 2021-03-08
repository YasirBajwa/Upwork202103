function Component1(props: any) {
    const [css, setCss] = React.useState("");

    React.useEffect(() => {
        BridgeStyling.loadStyle("./src/Component1.scss").then(css => {
            setCss(css);
        });
    });
    
    // if (!css) return null;
    let className = BridgeStyling.useStyle(css);

    return (
        <div  className={className}>
          <div className='header' >
             <h3>Mileway, Stockholm...</h3>
             <div className='header__section'>
                 <div className="header__op1 header__sm">OVERVIEW</div>
                 <div className="header__op2 header__sm1">TODO</div>
                 <div className="header__op3 header__sm">TOOLS</div>
                 <div className="header__op4 header__sm">DOCUMENTS</div>
                 <div className="header__op5 header__sm">RISK</div>
                 <div className="header__op6 header__sm">PROJECT</div>
                 <div className="header__op7 header__sm">
                     <input type='search' placeholder='SEARCH'/>
                 </div>

             </div>
          </div>

          <div className='body__section'>
                <div className='body__section__1'>
                       <p>Samtliga delar måste vara uppfyllda innan du kan gå vidare till nästa steg</p>
                </div>
                <div className="body__section__n">
                    <p>Mandatory –</p>
                </div>


                <div className="body__section__3">
                      <div className="body__section__3__1">
                           Done
                        </div>   
                      
                      <div className="body__section__3__2">
                           <div className='body__section__3__2__1'>
                             Name
                           </div>
                           <div className='body__section__3__2__2'>
                                     Task
                              </div>
                              <div className='body__section__3__2__3'>
                                    Status
                              </div>
                              <div className='body__section__3__2__4'>
                                    Deadline
                              </div>
                              <div className='body__section__3__2__5'>
                                      Assigned to
                              </div>
                              <div className='body__section__3__2__6'>

                              </div>
                         </div>
                         </div>
               {/* section 4 */}
                    <div className="body__section__4">
                      <div className="body__section__4__1">
                        </div>   
                      
                      <div className="body__section__4__2">
                           <div className='body__section__4__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__4__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__4__2__3'>
                              Klart
                              </div>
                              <div className='body__section__4__2__4'>
                                   
                              </div>
                              <div className='body__section__4__2__5'>
                              Johan Kvick
                              </div>
                              <div className='body__section__4__2__6'>
                              
                              </div>
                         </div>
                         </div>
                         {/* End of section 4 */}

                         {/* section 5 */}

                   <div className="body__section__5">
                      <div className="body__section__5__1">
                        </div>   
                      
                      <div className="body__section__5__2">
                           <div className='body__section__5__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__5__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__5__2__3'>
                                    Status
                              </div>
                              <div className='body__section__5__2__4'>
                                   
                              </div>
                              <div className='body__section__5__2__5'>
                              Johan Kvick
                              </div>
                              <div className='body__section__5__2__6'>
                                
                              </div>
                         </div>
                         </div>
                     {/* End of section 5 */}
                           {/* section 5 */}

                   <div className="body__section__5">
                      <div className="body__section__5__1">
                        </div>   
                      
                      <div className="body__section__5__2">
                           <div className='body__section__5__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__5__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__5__2__3'>
                                    Status
                              </div>
                              <div className='body__section__5__2__4'>
                                   
                              </div>
                              <div className='body__section__5__2__5'>
                              Johan Kvick
                              </div>
                              <div className='body__section__5__2__6'>
                                
                              </div>
                         </div>
                         </div>
                     {/* End of section 5 */}
                           {/* section 5 */}

                   <div className="body__section__5">
                      <div className="body__section__5__1">
                        </div>   
                      
                      <div className="body__section__5__2">
                           <div className='body__section__5__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__5__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__5__2__3'>
                                    Status
                              </div>
                              <div className='body__section__5__2__4'>
                                   
                              </div>
                              <div className='body__section__5__2__5'>
                              Johan Kvick
                              </div>
                              <div className='body__section__5__2__6'>
                                
                              </div>
                         </div>
                         </div>
                     {/* End of section 5 */}
                     {/* section 4 */}
                    <div className="body__section__4">
                      <div className="body__section__4__1">
                        </div>   
                      
                      <div className="body__section__4__2">
                           <div className='body__section__4__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__4__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__4__2__3'>
                              Klart
                              </div>
                              <div className='body__section__4__2__4'>
                                   
                              </div>
                              <div className='body__section__4__2__5'>
                              Johan Kvick
                              </div>
                              <div className='body__section__4__2__6'>
                              
                              </div>
                         </div>
                         </div>
                         {/* End of section 4 */}
                         {/* section 4 */}
                    <div className="body__section__4">
                      <div className="body__section__4__1">
                        </div>   
                      
                      <div className="body__section__4__2">
                           <div className='body__section__4__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__4__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__4__2__3'>
                              Klart
                              </div>
                              <div className='body__section__4__2__4'>
                                   
                              </div>
                              <div className='body__section__4__2__5'>
                              Johan Kvick
                              </div>
                              <div className='body__section__4__2__6'>
                              
                              </div>
                         </div>
                         </div>
                         {/* End of section 4 */}
                             {/* End of section 5 */}
                           {/* section 5 */}

                   <div className="body__section__5">
                      <div className="body__section__5__1">
                        </div>   
                      
                      <div className="body__section__5__2">
                           <div className='body__section__5__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__5__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__5__2__3'>
                                    Status
                              </div>
                              <div className='body__section__5__2__4'>
                                   
                              </div>
                              <div className='body__section__5__2__5'>
                              Johan Kvick
                              </div>
                              <div className='body__section__5__2__6'>
                                
                              </div>
                         </div>
                         </div>
                     {/* End of section 5 */}

                       {/* new section */}

                     <div className="body__section__n">
                    <p>Ej obligatoriska –</p>
                </div>
                {/* section 3 repeat */}
                <div className="body__section__3">
                      <div className="body__section__3__1">
                           Done
                        </div>   
                      
                      <div className="body__section__3__2">
                           <div className='body__section__3__2__1'>
                             Name
                           </div>
                           <div className='body__section__3__2__2'>
                                     Task
                              </div>
                              <div className='body__section__3__2__3'>
                                    Status
                              </div>
                              <div className='body__section__3__2__4'>
                                    Deadline
                              </div>
                              <div className='body__section__3__2__5'>
                                      Assigned to
                              </div>
                              <div className='body__section__3__2__6'>

                              </div>
                         </div>
                         </div>

                {/* End of section 3 repeat */}

                {/* section 4 and 5 repeat */}

 {/* section 4 */}
 <div className="body__section__4">
                      <div className="body__section__4__1">
                        </div>   
                      
                      <div className="body__section__4__2">
                           <div className='body__section__4__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__4__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__4__2__3'>
                              Klart
                              </div>
                              <div className='body__section__4__2__4'>
                                   
                              </div>
                              <div className='body__section__4__2__5'>
                              Johan Kvick
                              </div>
                              <div className='body__section__4__2__6'>
                              
                              </div>
                         </div>
                         </div>
                         {/* End of section 4 */}

                         {/* section 5 */}

                   <div className="body__section__5">
                      <div className="body__section__5__1">
                        </div>   
                      
                      <div className="body__section__5__2">
                           <div className='body__section__5__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__5__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__5__2__3'>
                                    Status
                              </div>
                              <div className='body__section__5__2__4'>
                                   
                              </div>
                              <div className='body__section__5__2__5'>
                              Johan Kvick
                              </div>
                              <div className='body__section__5__2__6'>
                                
                              </div>
                         </div>
                         </div>
                     {/* End of section 5 */}
                           {/* section 5 */}

                   <div className="body__section__5">
                      <div className="body__section__5__1">
                        </div>   
                      
                      <div className="body__section__5__2">
                           <div className='body__section__5__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__5__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__5__2__3'>
                                    Status
                              </div>
                              <div className='body__section__5__2__4'>
                                   
                              </div>
                              <div className='body__section__5__2__5'>
                              Johan Kvick
                              </div>
                              <div className='body__section__5__2__6'>
                                
                              </div>
                         </div>
                         </div>
                     {/* End of section 5 */}
                           {/* section 5 */}

                   <div className="body__section__5">
                      <div className="body__section__5__1">
                        </div>   
                      
                      <div className="body__section__5__2">
                           <div className='body__section__5__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__5__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__5__2__3'>
                                    Status
                              </div>
                              <div className='body__section__5__2__4'>
                                   
                              </div>
                              <div className='body__section__5__2__5'>
                              Johan Kvick
                              </div>
                              <div className='body__section__5__2__6'>
                                
                              </div>
                         </div>
                         </div>
                     {/* End of section 5 */}


                {/* End of section 4 and 5 repeat */}

          </div>
        </div>
    )
}