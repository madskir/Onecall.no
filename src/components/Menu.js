import React from 'react';

function Menu() {
  return (     
    <div className="header-wrapper">        
        <div class="d-flex nav-bar"> 
            <ul className="justify-content-start ml-3 p-3">
                <li className="list-inline-item">                
                    <svg width="87" height="27" viewBox="0 0 87 27" xmlns="http://www.w3.org/2000/svg">
                        <title>
                            OneCall logo
                        </title>
                        <path d="M38.614 14.72l-1.342 6.933h-3.28l1.288-6.702c.333-1.655-.096-2.133-.978-2.133-.644 0-1.455.48-2.147 1.117l-1.503 7.72h-3.296l2.218-11.412h2.6l.023 1.11h.096c.81-.632 2.074-1.36 3.22-1.36 2.292-.006 3.7 1.65 3.1 4.727zm11.31-1.332c0 1.63-1.67 3.613-7.093 3.832.072 1.3.598 1.902 1.694 1.902.882 0 2.123-.236 3.555-.993l.81 2.39c-1.504.918-3.24 1.396-5.006 1.378-3.22 0-4.532-2.035-4.532-4.66 0-3.763 2.48-7.218 6.63-7.218 3.007.002 3.937 1.73 3.937 3.36l.005.008zm-3.314.236c0-.497-.333-.805-.86-.805-1.43 0-2.288.95-2.67 2.247 2.38-.125 3.524-.55 3.524-1.45l.006.007zm11.12 5.372c-2.1 0-3.068-1.253-3.068-3.526 0-3.832 1.693-6.553 5.08-6.553 1.29 0 2.41.33 3.197 1.14l1.835-2.2c-1.025-1.112-2.933-1.844-4.936-1.844-6.25 0-8.874 4.73-8.874 9.914 0 3.5 1.74 5.986 5.843 5.986 2.29 0 4.317-.59 6.177-2.105l-1.208-2.284c-1.29.95-2.576 1.464-4.056 1.464l.006.008zm12.927-8.967c1.556.024 3.077.456 4.41 1.253l-2.03 10.362h-2.53v-1.16h-.09c-.72.928-1.848 1.456-3.03 1.42-2.432 0-3.695-1.99-3.695-4.565-.006-4.1 2.62-7.318 6.96-7.318l.005.007zm.788 2.98c-.385-.125-.787-.19-1.192-.19-2.052 0-3.1 1.966-3.1 4.33 0 1.42.525 1.966 1.24 1.966.788 0 1.534-.544 2.122-1.33l.93-4.775zm7.393 4.946l2.507-12.808h-3.3l-2.553 13.06c-.525 2.722.692 3.69 3.553 3.69l.74-2.744c-.953.002-1.145-.284-.953-1.206l.006.008zm5.39 0l2.503-12.8h-3.295l-2.552 13.053c-.525 2.72.692 3.69 3.555 3.69l.742-2.744c-.96 0-1.15-.286-.96-1.208l.007.008zm-56.85-4.374C27.38 6.722 22.225.94 15.362.102 8.5-.735 2.084 3.637.41 10.292c-1.675 6.655 1.918 13.504 8.373 15.963l2.118-10.72.122-.61c.334-1.653-.084-2.123-.96-2.123h-.008l-3.76.272 1.18-4.383L19.02 4.943c.482-.16 1.316-.344 1.118.74l-4.218 21.3c6.613-1.085 11.46-6.76 11.455-13.408l.006.008z" fill="#e00" fill-rule="evenodd"/>
                    </svg>
                </li>
            </ul>           
            <ul class="list-inline mx-auto justify-content-center p-3">
                <li className="list-inline-item">Mobilabonnement</li>
                <li className="list-inline-item">Kundeservice</li>
                <li className="list-inline-item">Nettbutikk</li>   
            </ul>
            <ul className="justify-content-end">
                <li className="list-inline-item">
                    Mine sider
                </li>
                <li className="menu-dropdown list-inline-item mr-3 p-3">Menu
                    <div className="mega-menu">
                        <div className="inner-mega-menu">
                            <p className="header">Mobilabonnement</p>
                            <p>Test1</p>
                            <hr/>
                            <p>Test1</p>
                            <hr/>
                            <p>Test1</p>
                        </div>

                        <div className="inner-mega-menu">
                            <p className="header">Nettbutikk</p>
                            <p>Test1</p>
                            <hr/>
                            <p>Test1</p>
                            <hr/>
                            <p>Test1</p>
                        </div>
                        
                        <div className="inner-mega-menu">
                            <p className="header">Tjenester</p>
                            <p>Test1</p>
                            <hr/>
                            <p>Test1</p>
                            <hr/>
                            <p>Test1</p>
                        </div>

                        <div className="inner-mega-menu">
                            <p className="header">Kundeservice</p>
                            <p>Test1</p>
                            <hr/>
                            <p>Test1</p>
                            <hr/>
                            <p>Test1</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>       
        <div className="header-banner"></div>
    </div>
  );
}

export default Menu;
