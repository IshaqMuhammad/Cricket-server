# 🏏 Pakistan Cricket Team Player Server

This is a Node.js + Express.js based mini server project made for my college assignment.
It provides player data of Pakistan Cricket Team (PCT) through dynamic routes — for example, users can fetch details like stats, PSL teams, etc., by simply using specific URLs.


---

## 🚀 Project Overview

The server returns JSON data of Pakistan’s top cricket players such as Babar Azam, Mohammad Rizwan, and others.
Each player has their own dynamic route that returns customized data depending on the endpoint.
This server also has the data about Female cricketer and also thier stats also.
This data is a dummy data which I use for my collage assignment.


---

## 🧩 Features

✅ Built using Node.js and Express.js
✅ Supports Dynamic Routes for each player
✅ Returns player data such as:

- General info (Name, Role, Country, etc.)

- Career Stats

- PSL Team History


✅ Simple, beginner-friendly, and easy to expand with more players


---

## 🌐 Example Routes

Here are some example routes you can try once your server is running:

| Purpose |	Example Route |	Description |
|---------|----------------|-------------|
| Player basic data |	`https://localhost:3000/babar-azam`	| Returns general info of Babar Azam |
| Player stats |	`https://localhost:3000/babar-azam/stats` |	Returns Babar Azam’s batting and career stats |
| PSL team info  |	`https://localhost:3000/babar-azam/psl-teams`	| Shows Babar Azam’s PSL team(s) |
| Another player |	`https://localhost:3000/mohammad-rizwan` |	Returns Mohammad Rizwan’s info |


You can easily add more players in the JS object (check below 👇).


---

## 🧠 How It Works

The project uses a simple JavaScript object to store player data like this:

```js
export const pct_Players = {  
  // Male Players (Existing)  
  "babar-azam": {  
    name: "Babar Azam",  
    age: 29,  
    role: "Batsman",  
    bowlingType: "Right-arm off break",  
    battingType: "Right-handed",  
    totalScore: 12902,  
    highestScore: 158,  
    PSLTeams: ["Karachi Kings", "Peshawar Zalmi"],  
    totalWickets: 0,  
    highestWickets: 0,  
    strikeRate: 89.2,  
    economy: 7.5,  
    captain: true,  
    totalCatches: 156,  
    gender: "male"  
  },  
  "shaheen-afridi": {  
    name: "Shaheen Afridi",  
    age: 24,  
    role: "Bowler",  
    bowlingType: "Left-arm fast",  
    battingType: "Left-handed",  
    totalScore: 678,  
    highestScore: 52,  
    PSLTeams: ["Lahore Qalandars"],  
    totalWickets: 253,  
    highestWickets: 6,  
    strikeRate: 85.1,  
    economy: 8.2,  
    captain: true,  
    totalCatches: 42,  
    gender: "male"  
  }
  //More players
```

## ⚙️ Installation & Setup

### 1. Clone or Download the project
```cmd
git clone https://github.com/IshaqMuhammad/Cricket-server
```

### 2. Install Dependencies

```cmd
npm install
```
### 3. Run the Server
```cmd
npm run dev
```
