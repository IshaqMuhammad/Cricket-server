import * as help from './helpers.js';
import express from 'express';

const app = express();

app.get('/:player',(req,res)=>{
    const playerName=req.params.player;
    res.send(help.getPlayerByName(playerName));

});
app.get("/" ,(req,res)=>{
    res.send("Welcome to Pakistan Cricket Team Info Server");
});

app.get("/players", (req, res) => {
    res.json(help.getPlayers());
});

app.get("/bowlers", (req, res) => {
    res.json(help.getBowlers());
});

app.get("/batsmen", (req, res) => {
    res.json(help.getBatsmen());
});

app.get("/allrounders", (req, res) => {
    res.json(help.getAllRounders());
});

app.get("/wicketkeepers", (req, res) => {
    res.json(help.getWicketKeepers());
});

app.get("/mostwickettaker", (req, res) => {
    res.json(help.getMoreWicketTaker());
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});