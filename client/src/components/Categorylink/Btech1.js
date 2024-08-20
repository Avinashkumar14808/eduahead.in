import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

import './Btech1.css'
import img1 from './images5/unsplash_f1YfrZ1o2r8.png'
import img2 from './images5/unsplash_g-fm27_BRyQ.png'
import img3 from './images5/unsplash_rsZTwEML7p8.png'
import img4 from './images5/unsplash_cHR1Q2g1_F4.png'
import img5 from './images5/unsplash_95YRwf6CNw8.png'
import img6 from './images5/unsplash_f1YfrZ1o2r88.png'
import img7 from './images5/unsplash_f1YfrZ1o2r85.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Btech1 = () => {

    const [links, setLinks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await axios.get('http://localhost:4000/download', { withCredentials: true });
                setLinks(response.data.links);
            } catch (error) {
                navigate('/login');
            }
        };
        fetchLinks();
    }, [navigate]);


    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const navigate = useNavigate();

    // // Function to check if the user is logged in
    // const checkAuthentication = () => {
    //     axios.get('http://localhost:8000/api/check-auth', { withCredentials: true })
    //         .then(response => {
    //             if (response.data.isAuthenticated) {
    //                 setIsLoggedIn(true);
    //                 console.log("User is authenticated");
    //                 // Proceed with download logic here
    //                 handleDownload();
    //             } else {
    //                 setIsLoggedIn(false);
    //                 console.log("User is not authenticated");
    //                 // Redirect to login or show authentication message
    //                 navigate('/login');
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error checking auth:', error);
    //             setIsLoggedIn(false);
    //             // Handle error scenario (e.g., show error message)
    //         });
    // };

    // Function to handle download click
    // const handleDownloadClick = (e) => {
    //     e.preventDefault();
    //     if (!isLoggedIn) {
    //         alert('Please log in to access documents.');
    //         navigate('/login');
    //     } else {
    //         // Proceed with download logic directly if user is authenticated
    //         handleDownload();
    //     }
    // };

    // // Example function for handling download logic
    // const handleDownload = () => {
    //     // Replace with actual download logic
    //     console.log('Download initiated');
    //     // Redirect or perform download action here
    //     window.location.href = 'https://drive.google.com/file/d/10QjuK0Ay6WduX2GWRz5LqPgwhE7RAzqA/view?usp=drivesdk';
    // };


    return (
        <>
            <Navbar />

            <div className="notes">
                <h1>
                    BTech-1st Sem & 2nd Sem <span> Notes</span>
                </h1>
                <img className="imgLine" src="Line.png" width="170px" height="30px" alt="" />
            </div>

            <div className="btech-1st-sem" id="sem1">
                <div className="sem">1st Semester</div>

                <p className="ctr" style={{ paddingTop: '48px', paddingBottom: '48px', textAlign: 'left', paddingLeft: '10%', paddingRight: '10%' }}>
                    Welcome to EduAhead! We provide top-quality handwritten notes for scoring 9 CGPA and above in your first year of technical studies. Our notes are carefully prepared to cover all the important topics, making it easier for you to understand and learn. With clear and accurate explanations, our notes simplify complex concepts, helping you excel in your studies. Boost your academic performance and achieve your goals with our user-friendly, high-quality handwritten notes. Start your journey towards success today and make the most of your technical studies!
                </p>

                {/* Notes Card for Maths */}
                <main className="notes-1st">
                    <section className="notes-card1">
                        <p className="math">MATHEMATICS I : BSC 103</p>
                        <img src={img1} alt="" />
                        <div className="mname mod-name">
                            <p>Module Name</p>
                            <p>Action</p>
                        </div>

                        <div className="cards-box">
                            {[
                                { module: 'Mod-1 Differentiation', download: 'down1' },
                                { module: 'Mod-2 Integral', download: 'down2' },
                                { module: 'Mod-3 Matrices', download: 'down3' },
                                { module: 'Mod-4 Differential Eq', download: 'down4' },
                                { module: 'Mod-5 Infinite Series', download: 'down5' },
                            ].map(({ module, download }, index) => (
                                <div key={index} className={`mname${index + 1} mname-common`}>
                                    <p className="md">{module}</p>
                                    <p className={`dl ${download} download-common wat`}>Download</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Notes Card for Physics */}
                    <section className="notes-card1">
                        <p className="physics">PHYSICS I : BSC 103</p>
                        <img src={img2} alt="" />
                        <div className="mnamee mod-name">
                            <p>Module Name</p>
                            <p>Action</p>
                        </div>

                        {[
                            { module: 'Mod-1 Harmonic Osci', download: 'down6' },
                            { module: 'Mod-2 Wave Optics', download: 'down7' },
                            { module: 'Mod-3 Vector Calculus', download: 'down8' },
                            { module: 'Mod-4 Electrostatics', download: 'down9' },
                            { module: 'Mod-5 Magnetostatics', download: 'down10' },
                        ].map(({ module, download }, index) => (
                            <div key={index} className={`mnamee${index + 1} mname-common`}>
                                <p className="md1">{module}</p>
                                <a href="">
                                    <p className={`dl ${download} download-common wat`}>Download</p>
                                </a>
                            </div>
                        ))}
                    </section>
                </main>
            </div>




            <div className="btech-2nd-sem" id="sem2">
                <div className="sem">2nd Semester</div>
                <p className="ctr" style={{ paddingTop: '48px', paddingBottom: '48px', textAlign: 'left', paddingLeft: '10%', paddingRight: '10%' }}>
                    Welcome to EduAhead, where you can find top-notch handwritten notes to help you achieve a CGPA of 9 or higher in your first year of technical studies. Our notes are carefully written, covering all the important topics you need to know. We make sure to explain complex ideas in a clear and easy-to-understand way. With our high-quality notes, you can confidently prepare for your exams and excel in your technical subjects. Invest in your academic success today by accessing our excellent handwritten notes.
                </p>

                {/* Notes Card for Maths */}
                <main className="notes-1st-3">
                    <section class="notes-card1">
                        <p class="math2">MATHEMATICS II : BSC 104</p>

                        <img src={img3} alt="" />

                            <div class="mnamec mod-name">
                                <p>Module Name</p>
                                <p>Action</p>
                            </div>

                            <div class="mnamec1 mname-common">
                                <p class="md4">Mod-1 Differentiation</p>
                                <a href="https://drive.google.com/file/d/10jkA_uZpxuJ5cA19jYC1BA0XbNDBTr6k/view?usp=drivesdk"> <p class="dl down21 download-common wat">Download</p> </a>
                            </div>

                            <div class="mnamec2 mname-common">
                                <p class="md4">Mod-2 Integral</p>
                                <a href="https://drive.google.com/file/d/10q1jbYu1VPtaUFbOSzmTnuGps5KWNGM7/view?usp=drivesdk"> <p class="dl down22 download-common wat">Download</p> </a>
                            </div>

                            <div class="mnamec3 mname-common">
                                <p class="md4">Mod-3 Matrices</p>
                                <a href="https://drive.google.com/file/d/10uiZyAA_MWLaUrkjjg--6JpRJ-QgSnVe/view?usp=drivesdk"> <p class="dl down23 download-common wat">Download</p> </a>
                            </div>

                            <div class="mnamec4 mname-common">
                                <p class="md4">Mod-4 Differential Eq</p>
                                <a href="https://drive.google.com/file/d/112cgH6GFXlRepIiJP_QR0Cf3QFRYzjMS/view?usp=drivesdk"> <p class="dl down24 download-common wat">Download</p> </a>
                            </div>

                            <div class="mnamec5 mname-common m-foot">
                                <p class="md4">Mod-5 Infinite Series</p>
                                <a href="https://drive.google.com/file/d/1154OqFiOqq7TvJBB6fLBoEYFAkIEDBTf/view?usp=drivesdk"> <p class="dl down25 download-common wat">Download</p> </a>
                            </div>

                    </section>

                    {/* Notes Card for Physics */}
                    <section className="notes-card1">
                        <p className="physics2">PHYSICS II : BSC 105</p>
                        <img src={img4} alt="" />
                        <div className="mnamed mod-name">
                            <p>Module Name</p>
                            <p>Action</p>
                        </div>

                        {[
                            { module: 'Mod-1 Harmonic Osci', download: 'down26' },
                            { module: 'Mod-2 Wave Optics', download: 'down27' },
                            { module: 'Mod-3 Vector Calculus', download: 'down28' },
                            { module: 'Mod-4 Electrostatics', download: 'down29' },
                            { module: 'Mod-5 Magnetostatics', download: 'down30' },
                        ].map(({ module, download }, index) => (
                            <div key={index} className={`mnamed${index + 1} mname-common`}>
                                <p className="md5">{module}</p>
                                <a href="">
                                    <p className={`dl ${download} download-common wat`}>Download</p>
                                </a>
                            </div>
                        ))}
                    </section>
                </main>

                <section className="notes-card1 notes-pps">
                    <p className="pps">PPS : ESC 103</p>

                    <img src={img5} alt="" />

                    <div className="mnamef mod-name">
                        <p>Module Name</p>
                        <p>Action</p>
                    </div>

                    <div className="mnamef1 mname-common">
                        <p className="md6">Mod-1 Intro to Program</p>
                        <a href="https://drive.google.com/file/d/11AReVt7C4k-KyOO2fTSA9rhWJj-GfCyE/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                            <p className="dl down31 download-common wat">Download</p>
                        </a>
                    </div>

                    <div className="mnamef2 mname-common">
                        <p className="md6">Mod-2 Arithmetic exp</p>
                        <a href="https://drive.google.com/file/d/11BYqTgmfyCQ0z-dmKwv3qWnotKRZGk3B/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                            <p className="dl down32 download-common wat">Download</p>
                        </a>
                    </div>

                    <div className="mnamef3 mname-common">
                        <p className="md6">Mod-3 Arrays</p>
                        <a href="https://drive.google.com/file/d/11Q7zt-pKhVNVYx8w7ZUYSjfZfRO5IoBu/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                            <p className="dl down33 download-common wat">Download</p>
                        </a>
                    </div>

                    <div className="mnamef4 mname-common">
                        <p className="md6">Mod-4 Basic Algo</p>
                        <a href="https://drive.google.com/file/d/11EGb558L1rGKTuj5tFWJIITMS1RWTCgM/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                            <p className="dl down34 download-common wat">Download</p>
                        </a>
                    </div>

                    <div className="mnamef5 mname-common m-foot">
                        <p className="md6">Mod-5 Function & Pointer</p>
                        <a href="https://drive.google.com/file/d/11Ln2EFYOTW6zUDIICbOfJDj27wblZyX9/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                            <p className="dl down35 download-common wat">Download</p>
                        </a>
                    </div>

                    <div className="mnamef6 mname-common m-foot">
                        <p className="md6">Mod-6 Recursion</p>
                        <a href="https://drive.google.com/file/d/11NPS54k7sV-ecdTyzEGAytCdM6tQlsgE/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                            <p className="dl down135 download-common wat">Download</p>
                        </a>
                    </div>
                </section>
                {/* Notes Card for PPS end */}

            </div>

            <div className="pyqs" id="PYQ">
                <h1>
                    BTech-1st Sem & 2nd Sem <span>PYQs</span>
                </h1>
            </div>


            <div className="main-pyq">
                {/* Pyqs Card for Sem-1 start */}
                <main className="notes-1st-4">
                    <p className="notes-text" style={{ textAlign: 'left', padding: '36px 10% 16px 10%' }}>
                        Welcome to EduAhead, designed exclusively for Btech students seeking an edge in their exams. We understand the importance of PYQs (Previously Year Questions) and their ability to enhance exam preparation. Our website offers a carefully selected compilation of PYQs that are frequently repeated in exams. By practicing these questions, you can gain valuable insights into the exam pattern and improve your chances of success. Prepare effectively and stay ahead of the competition with our specialized resource of PYQs. Unlock your potential and achieve remarkable results in your Btech journey today!
                    </p>
                    <section className="notes-card1">
                        <p className="s1pyq">SEM-I : PYQs</p>

                        <img src={img6} alt="" />

                        <div className="sname mod-name">
                            <p>Subject Name</p>
                            <p>Action</p>
                        </div>

                        <div className="sname1 mname-common">
                            <p className="s1">Sub-1 Maths-I</p>
                            <p className="dl down36 download-common wat">Download</p>
                        </div>

                        <div className="sname2 mname-common">
                            <p className="s1">Sub-2 Physics-I</p>
                            <p className="dl down37 download-common wat">Download</p>
                        </div>

                        <div className="sname3 mname-common">
                            <p className="s1">Sub-3 Chemistry-I</p>
                            <a href="https://drive.google.com/file/d/10VoLEwoNtSjirxtwgS76DvjSh56vf_Pa/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                                <p className="dl down38 download-common wat">Download</p>
                            </a>

                            {/* <Link to="#" onClick={handleDownloadClick}>
                                <p className="dl down38 download-common wat">Download</p>
                            </Link> */}
                        </div>

                        <div className="sname4 mname-common m-foot">
                            <p className="s1">Sub-4 BEE</p>
                            <a href="https://drive.google.com/file/d/10VoLEwoNtSjirxtwgS76DvjSh56vf_Pa/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                                <p className="dl down39 download-common wat">Download</p>
                            </a>
                        </div>
                    </section>
                    {/* Pyqs Card for Sem-1 end */}

                    {/* Pyqs Card for Sem-2 start */}


                    <section className="notes-card1">
                        <p className="s2pyq">SEM-II : PYQs</p>
                        <img src={img7} alt="" />

                        <div className="sname mod-name">
                            <p>Subject Name</p>
                            <p>Action</p>
                        </div>

                        {links.length > 0 ? (
                            links.map((link, index) => (
                                <div key={index} className={`snamea${index + 1} mname-common`}>
                                    <p className="s2">{link.subject}</p>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        <p className="dl download-common wat">Download</p>
                                    </a>
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </section>

                    {/* <section className="notes-card1">
            <p className="s2pyq">SEM-II : PYQs</p>

            <img src={img7} alt="" />

            <div className="sname mod-name">
              <p>Subject Name</p>
              <p>Action</p>
            </div>

            <div className="snamea1 mname-common">
              <p className="s2">Sub-1 Maths-II</p>
              <a href="https://drive.google.com/file/d/10eNh0Wc2JzULq5funs4uQj77tUCCuwI3/view?usp=drivesdk">
                <p className="dl down40 download-common wat">Download</p>
              </a>
            </div>

            <div className="snamea2 mname-common">
              <p className="s2">Sub-2 Physics-II</p>
              <a href="https://drive.google.com/file/d/10SL3JFQEneEv02guZ03wEKQ3Kkh4QV-h/view?usp=drivesdk">
                <p className="dl down41 download-common wat">Download</p>
              </a>
            </div>

            <div className="snamea3 mname-common">
              <p className="s2">Sub-3 PPS</p>
              <a href="https://drive.google.com/file/d/10fHSBBAcMSQftt2ypy577Ml3BCZ96g6M/view?usp=drivesdk">
                <p className="dl down42 download-common wat">Download</p>
              </a>
            </div>

            <div className="snamea4 mname-common m-foot">
              <p className="s2">Sub-4 English</p>
              <a href="https://drive.google.com/file/d/10XywrHc4qJxZY-nQVg3uBD58TF29wIO9/view?usp=drivesdk">
                <p className="dl down43 download-common wat">Download</p>
              </a>
            </div>
          </section> */}
                    {/* Pyqs Card for Sem-2 end */}
                </main>
            </div>

            <Footer />
        </>
    );
};

export default Btech1;
