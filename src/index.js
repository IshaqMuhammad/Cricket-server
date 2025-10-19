import * as help from './helpers.js';
import express from 'express';

const app = express();

app.get("/" ,(req,res)=>{
    res.send("Welcome to Pakistan Cricket Team Info Server");
});

app.get("/players", (req, res) => {
    res.send(help.getPlayers());
});

app.get("/bowlers", (req, res) => {
    res.send(help.getBowlers());
});

app.get("/batsmen", (req, res) => {
    res.send(help.getBatsmen());
});

app.get("/all-rounders", (req, res) => {
    res.send(help.getAllRounders());
});

app.get("/wicket-keepers", (req, res) => {
    res.send(help.getWicketKeepers());
});

app.get("/most-wicket-taker", (req, res) => {
    res.send(help.getMoreWicketTaker());
});

app.get("/most-run-scorer", (req, res) => {
    res.send(help.getMoreRunScorer());
});

app.get('/captains', (req,res)=>{
    res.send(help.getCaptains());
});

app.get('/best-fielder', (req,res)=>{
    res.send(help.getBestFielder());
})

app.get('/best-wicket-keeper', (req,res)=>{
    res.send(help.getBestWicketKeeper());
});

app.get("/females" ,(req,res)=>{
    res.send(help.getfemalePlayers());
});

app.get('/:player',(req,res)=>{
    const playerName=req.params.player;
    res.send(help.getPlayerByName(playerName));

}); 

app.get("/:player/psl-teams",(req,res)=>{
    const playerName=req.params.player;
    res.send(help.getPslTeamsByName(playerName));
});

app.get("/:player/stats",(req,res)=>{
    const playerName=req.params.player;
    res.send(help.getPlayerStatesByName(playerName));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});