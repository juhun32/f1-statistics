import React from "react";
import "../css/StandingDriver.css";

const StandingDriver = () => {
  // Example driver data for the 2024 season
  const f1Drivers2024 = [
    {
      name: "Max Verstappen",
      position: 1,
      points: 485,
      raceWins: 14,
      team: "Red Bull Racing"
    },
    {
      name: "Sergio Pérez",
      position: 2,
      points: 285,
      raceWins: 2,
      team: "Red Bull Racing"
    },
    {
      name: "Lewis Hamilton",
      position: 3,
      points: 270,
      raceWins: 3,
      team: "Mercedes-AMG Petronas"
    },
    {
      name: "Charles Leclerc",
      position: 4,
      points: 250,
      raceWins: 2,
      team: "Scuderia Ferrari"
    },
    {
      name: "George Russell",
      position: 5,
      points: 235,
      raceWins: 1,
      team: "Mercedes-AMG Petronas"
    },
    {
      name: "Carlos Sainz Jr.",
      position: 6,
      points: 215,
      raceWins: 1,
      team: "Scuderia Ferrari"
    },
    {
      name: "Lando Norris",
      position: 7,
      points: 190,
      raceWins: 0,
      team: "McLaren F1 Team"
    },
    {
      name: "Oscar Piastri",
      position: 8,
      points: 160,
      raceWins: 0,
      team: "McLaren F1 Team"
    },
    {
      name: "Fernando Alonso",
      position: 9,
      points: 140,
      raceWins: 1,
      team: "Aston Martin Aramco Cognizant F1"
    },
    {
      name: "Pierre Gasly",
      position: 10,
      points: 120,
      raceWins: 0,
      team: "Alpine F1 Team"
    },
    {
      name: "Esteban Ocon",
      position: 11,
      points: 110,
      raceWins: 0,
      team: "Alpine F1 Team"
    },
    {
      name: "Alex Albon",
      position: 12,
      points: 75,
      raceWins: 0,
      team: "Williams Racing"
    },
    {
      name: "Valtteri Bottas",
      position: 13,
      points: 70,
      raceWins: 0,
      team: "Alfa Romeo F1 Team Stake"
    },
    {
      name: "Lance Stroll",
      position: 14,
      points: 60,
      raceWins: 0,
      team: "Aston Martin Aramco Cognizant F1"
    },
    {
      name: "Yuki Tsunoda",
      position: 15,
      points: 50,
      raceWins: 0,
      team: "Scuderia AlphaTauri"
    },
    {
      name: "Nico Hülkenberg",
      position: 16,
      points: 45,
      raceWins: 0,
      team: "MoneyGram Haas F1 Team"
    },
    {
      name: "Kevin Magnussen",
      position: 17,
      points: 40,
      raceWins: 0,
      team: "MoneyGram Haas F1 Team"
    },
    {
      name: "Guanyu Zhou",
      position: 18,
      points: 35,
      raceWins: 0,
      team: "Alfa Romeo F1 Team Stake"
    },
    {
      name: "Logan Sargeant",
      position: 19,
      points: 15,
      raceWins: 0,
      team: "Williams Racing"
    },
    {
      name: "Daniel Ricciardo",
      position: 20,
      points: 10,
      raceWins: 0,
      team: "Scuderia AlphaTauri"
    }
  ];

  return (
    <div className="driver-standings">
      {f1Drivers2024.map((driver, index) => (
        <div key={index} className="driver-standing">
          <h2>{driver.name}</h2>
          <p>Position: {driver.position}</p>
          <p>Points: {driver.points}</p>
          <p>Team: {driver.team}</p>
          <p>Race Wins: {driver.raceWins}</p>
        </div>
      ))}
    </div>
  );
};

export default StandingDriver;
