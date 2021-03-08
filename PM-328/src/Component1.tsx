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
            
                    <div className="body__section__4">
                      <div className="body__section__4__1">
                        </div>   
                      
                      <div className="body__section__4__2 margin-check">
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
                      
                      <div className="body__section__4">
                      <div className="body__section__4__1__light">
                        </div>   
                      
                      <div className="body__section__4__2 margin-check">
                           <div className='body__section__4__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__4__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__4__2__3'>
                             
                              </div>
                              <div className='body__section__4__2__4'>
                                   
                              </div>
                              <div className='body__section__4__2__5 body__section__4__2__5__light'>
                              Johan Kvick
                              </div>
                              <div className='body__section__4__2__6'>
                              
                              </div>
                         </div>
                         </div>
                        
                      <div className="body__section__4">
                      <div className="body__section__4__1__light">
                        </div>   
                      
                      <div className="body__section__4__2 margin-check">
                           <div className='body__section__4__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__4__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__4__2__3'>
                             
                              </div>
                              <div className='body__section__4__2__4'>
                                   
                              </div>
                              <div className='body__section__4__2__5 body__section__4__2__5__light'>
                              Johan Kvick
                              </div>
                              <div className='body__section__4__2__6'>
                              
                              </div>
                         </div>
                         </div>
                     
                    <div className="body__section__4">
                      <div className="body__section__4__1__light">
                        </div>   
                      
                      <div className="body__section__4__2 margin-check">
                           <div className='body__section__4__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__4__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__4__2__3'>
                            
                              </div>
                              <div className='body__section__4__2__4'>
                                   
                              </div>
                              <div className='body__section__4__2__5 body__section__4__2__5__light'>
                              Johan Kvick
                              </div>
                              <div className='body__section__4__2__6'>
                              
                              </div>
                         </div>
                         </div>
                       
                      <div className="body__section__4">
                      <div className="body__section__4__1">
                        </div>   
                      
                      <div className="body__section__4__2 margin-check">
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
                        
                      <div className="body__section__4">
                      <div className="body__section__4__1">
                        </div>   
                      
                      <div className="body__section__4__2 margin-check">
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
                        
                         <div className="body__section__4">
                      <div className="body__section__4__1__light">
                        </div>   
                      
                      <div className="body__section__4__2 margin-check">
                           <div className='body__section__4__2__1'>
                           Arbetsmijlöplan
                           </div>
                           <div className='body__section__4__2__2'>
                           Upprätta
                              </div>
                              <div className='body__section__4__2__3'>
                             
                              </div>
                              <div className='body__section__4__2__4'>
                                   
                              </div>
                              <div className='body__section__4__2__5 body__section__4__2__5__light '>
                              Johan Kvick
                              </div>
                              <div className='body__section__4__2__6'>
                              
                              </div>
                         </div>
                         </div>
          
                         <div className="body__section__f">
                    <p>Ej obligatoriska –</p>
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
            
                    <div className="body__section__4">
                      <div className="body__section__4__1">
                        </div>   
                      
                      <div className="body__section__4__2 margin-check">
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
                      
                      <div className="body__section__4">
                      <div className="body__section__4__1__light">
                        </div>   
                      
                      <div className="body__section__4__2 margin-check">
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
                        
                         <div className="body__section__4">
                      <div className="body__section__4__1__light">
                        </div>   
                      
                      <div className="body__section__4__2 margin-check">
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
                        
          
                         <div className="body__section__4">
                      <div className="body__section__4__1__light">
                        </div>   
                      
                      <div className="body__section__4__2 margin-check">
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
                        
          
          
          </div>
        </div>
    )
}