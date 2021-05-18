import React from 'react'
import { useSelector } from "react-redux";
const Resume = () => {
   const reducer_user = useSelector(({ reducer_user }) => reducer_user)
   if (reducer_user.data !== null) {
      const academic = reducer_user.data.academic.map(function (academicRow) {
         return <div key={academicRow.university} >
            <h3>{academicRow.university}</h3>
            <p className="info">{academicRow.major} <span>&bull;</span>
               <em className="date"> {academicRow.timeStart} - {academicRow.timeEnd}</em>
            </p>
         </div>
      })

      const experience = reducer_user.data.experience.map(function (experienceRow) {
         const works = experienceRow.works.map(function (worksRow) {
            return <div key={Math.random()}>
               <p> <span>&bull;</span>  {worksRow}</p>
            </div>
         })
         return <div key={experienceRow.company}><h3>{experienceRow.company}</h3>
            <p className="info">{experienceRow.position} <span>&bull;</span> <em className="date">{experienceRow.timeStart} - {experienceRow.timeEnd}</em></p>
            {works}
         </div>
      })
      var skills = reducer_user.data.skill.map(function (skillRow) {
         return <li key={skillRow}>{skillRow}</li>
      })
      var database = reducer_user.data.database.map(function (databaseRow) {
         return <li key={databaseRow}>{databaseRow}</li>
      })

      return (
         <section id="resume">
            <div className="row academic">
               <div className="three columns header-col">
                  <h1><span>Academic</span></h1>
               </div>
               <div className="nine columns main-col">
                  <div className="row item">
                     <div className="twelve columns">
                        {academic}
                     </div>
                  </div>
               </div>
            </div>
            <div className="row work">
               <div className="three columns header-col">
                  <h1><span>Work</span></h1>
               </div>
               <div className="nine columns main-col">
                  {experience}
               </div>
            </div>
            <div className="row skill">
               <div className="three columns header-col">
                  <h1><span>Skills</span></h1>
               </div>
               <div className="nine columns main-col">
                  <p>{skills}
                  </p>
               </div>
            </div>
            <div className="row skill">
               <div className="three columns header-col">
                  <h1><span>Database</span></h1>
               </div>
               <div className="nine columns main-col">
                  <p>{database}
                  </p>
               </div>
            </div>
         </section>
      );
   } else {
      return (
         <section id="resume">
            
         </section>)
   }
}
export default Resume