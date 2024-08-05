import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../components/PageHeader'; // Import PageHeader component if needed
import GEMinAI_Launch_Event170 from "./GEMinAI_Launch_Event170.jpg";
import GEMinAI_Launch_Event176 from "./GEMinAI_Launch_Event176.jpg";
import GEMinAI_Launch_Event179 from "./GEMinAI_Launch_Event179.jpg";
import GEMinAI_Launch_Event191 from "./GEMinAI_Launch_Event191.jpg";
import group from "./group.jpg";
import { Institutions } from "../components/Institutions";
// import styles from "../css/custom.css"
import IMG_3070 from "./IMG_3070.jpg";

import styles from "./index.module.css";
import Link from "@docusaurus/Link";


// export function Institutions({ list }) {
//   return (
//     <section >
//       <div >
//         {list.map((category) => (
//           <div key={category.title} className="row margin-bottom--lg"  >

//             <h2 className="col col--2 "  >{category.title}</h2>
//             {category.members.map((props) => (
//                    <a href={props.url} target="_blank" rel="noopener noreferrer">
//                    <img className="institutionsa-image"

//                      src={props.log}
//                      alt={props.name}

//                    />
//                  </a>      


//               // <Institution key={props.name} {...props}   />
         
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
export const InstitutionList = [
  {
    // title: "Participating Universities",
    members: [
      {
        name: "SE4AI",
        log: require("../../logos/creat2.png").default,
        url: "https://se4ai.org/",
        
      },
      {
        name: "GEMinA",
        log: require("../../logos/GEMinAIprogramm.png").default,
        url: "https://www.concordia.ca/research/applied-ai-institute/initiatives/geminai.html",
      },
      {
        name: "AIinstitute",
        log: require("../../logos/AIinstitute.png").default,
        url: "https://www.concordia.ca/research/applied-ai-institute.html",
      },
      
      
      
    ]}]
const GEMinAIProgramPage= () => {
  return (
    <Layout title="2024-25 GEMinAI Program - Applications Now Open " description="The project's GEMinAI Program.">

<PageHeader title=" GEMinAI Program " />

<main >
<section>

<div className='container'>
  <div class="row margin-bottom--lg">
    
  <h2 class="col col--12 section">Applications Now Open  </h2>


  
        <p className='GEMI2'>
         Together with the Applied AI institute at Concordia, 
          we are excited to announce the launch of our recruitment
           campaign for the next cohort of the
<strong> Gender Equity Mentoring in AI (GEMinAI) </strong>Program.
 The GEMinAI (Gender Equity Mentoring in AI) Program seeks to address gender 
 inequity within artificial intelligence fields, where women make up only 25% of 
 AI specialists (World Economic Forum, 2021). GEMinAI aims to narrow this gap by 
 connecting women and gender non-conforming undergraduate and graduate students with like-minded 
 AI professionals for support, encouragement, and assistance along their career journey.</p>

{/* <div className="card__image"> */}
<div class="col col--4 margin-bottom--lg member_src-components-TeamMembers-module memberLarge_src-components-TeamMembers-module"><div class="card"><div class="card__image">
<img src={group} alt="group" />
</div></div></div> 
<div class="col col--4 margin-bottom--lg member_src-components-TeamMembers-module memberLarge_src-components-TeamMembers-module"><div class="card"><div class="card__image">
{/* <img src={GEMinAI_Launch_Event176} alt="GEMinAI_Launch_Event176" height="300" /> */}
<img src={GEMinAI_Launch_Event179} alt="GEMinAI_Launch_Event179" height="300"  />


</div></div></div>
<div class="col col--4 margin-bottom--lg member_src-components-TeamMembers-module memberLarge_src-components-TeamMembers-module"><div class="card"><div class="card__image">
<img src={IMG_3070} alt="IMG_3070"  />
</div></div></div>
{/* <div class="col col--3 margin-bottom--lg member_src-components-TeamMembers-module memberLarge_src-components-TeamMembers-module"><div class="card"><div class="card__image">

<img src={GEMinAI_Launch_Event179} alt="GEMinAI_Launch_Event179" height="217"  />
</div></div> */}
 {/* </div> */}


</div>
</div>
<div className='container'>

<div class="space">
<h2 class="col col--12 section" >Mentor Application  </h2>

<p className='GEMI2'>
      If you are a professional working in the field of AI, please consider mentoring a student for 6 months during the 2024-25 academic year. For more information and to apply, please complete the 
    Mentor Application Form  here:
    </p>
      <p className={styles.buttons}>
    <Link className="button button--primary button--lg" to="https://airtable.com/appRSDpicOuCifPPL/pag5pFp28pzutcEh1/form">
      Apply Now
    </Link>
  </p></div>


  <h2 class="col col--12 section">Mentee Application  </h2>

  <p className='GEMI2'>
Mentees must be currently enrolled as Concordia undergraduate or graduate students and identify as a woman or non-binary person.  CREATE SE4AI trainees from all institutions are eligible to join.  To apply, please complete the
 Mentee Application Form here:</p>
      <p className={styles.buttons}>
    <Link className="button button--primary button--lg" to="https://airtable.com/appRSDpicOuCifPPL/pagQHgB1Re4kX97DA/form">
      Apply Now
    </Link>
  </p>

 


 </div>

<div class="row margin-bottom--lg">
</div> 

{/* <main  className="geminAI-prtner">
    <Institutions list={InstitutionList}   />
    </main> */}
 </section>
          </main>
    </Layout>
  );
};

export default GEMinAIProgramPage;