import "./about.css";

function About() {
   return (
      <>
         <h1>About this project</h1>
         <p>
            This project was created as part of the HunterHacks26 at Hunter College. The goal of this project is to analyze fare evasion in the New York City subway system and provide insights into which stations have the highest rates of fare evasion.
         </p>
         <p>
            We used data from the MTA's Subway Stations Evasion Percentage dataset, which provides information on the percentage of fare evasion at each subway station. We showcase a map of the New York City subway system with the fare evasion data overlaid. We also used Python and various libraries such as Pandas for convenient data analysis.
         </p>
         <p>
            Our findings show that certain stations have higher rates of fare evasion. This highlights the need for targeted interventions to address fare evasion and ensure that all riders are paying their fair share. Additionally, to stations with missing data, we hope to encourage the MTA to collect and publish more comprehensive data for better analysis.
         </p>
      </>
   );
}

export default About;
