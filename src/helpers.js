import { pct_Players } from "./object.js";

export function getPlayers() {
    return pct_Players;
}
export function getBowlers() {
    const Bowler={};
    for (const player in pct_Players){
        if (pct_Players[player].role === "Bowler") {
            Bowler[player]=pct_Players[player];
        
        }
    }
    return Bowler;
}

export function getBatsmen() {
    const Batsman={};
    for (const player in pct_Players){
        if (pct_Players[player].role === "Batsman") {
            Batsman[player]=pct_Players[player];
        
        }
    }
    return Batsman;
}

export function getAllRounders() {
    const AllRounders={};
    for (const player in pct_Players){
        if (pct_Players[player].role === "All-rounder") {
            AllRounders[player]=pct_Players[player];

        }
    }
    return AllRounders;
}
export function getWicketKeepers() {
    const WicketKeepers={};
    for (const player in pct_Players){
        if (pct_Players[player].role === "Wicketkeeper-Batsman") {
            WicketKeepers[player]=pct_Players[player];
        }
    }
    return WicketKeepers;
}

export function getBestFielder() {
    let bestFielder={
        totalCatches:0
    };
    for (const player in pct_Players){
        if(bestFielder.totalCatches<pct_Players[player].totalCatches && pct_Players[player].role!=="Wicketkeeper-Batsman"){
            bestFielder=pct_Players[player];
        }
    }
    return bestFielder;
}

export function getBestWicketKeeper() {
    let bestWicketKeeper={
        totalCatches:0
    };
    for (const player in pct_Players){
        if(bestWicketKeeper.totalCatches<pct_Players[player].totalCatches && pct_Players[player].role==="Wicketkeeper-Batsman"){
            bestWicketKeeper=pct_Players[player];
        }
    }
    return bestWicketKeeper;
}

export function getfemalePlayers(){
    const femalePlayers={};
    for (const player in pct_Players){
        if (pct_Players[player].gender==="female") {
            femalePlayers[player]=pct_Players[player];
        }
    }
    return femalePlayers;
}

export function getPslTeamsByName(name){
    const teamsData = pct_Players[name].PSLTeams;
    if (teamsData) {
        return teamsData;
    } else {
        return { error: "Player not found" };
    }
}

export function getPlayerStatesByName(name){
    const playerData = pct_Players[name]
}

export function getMoreWicketTaker(){
    let mostWicketTaker={
        totalWickets:0
    };
    for (const player in pct_Players){
        if(mostWicketTaker.totalWickets<pct_Players[player].totalWickets){
            mostWicketTaker=pct_Players[player];
        }
    }
    return mostWicketTaker;
}

export function getMoreRunScorer(){
   let MoreRunScorer={
        totalScore:0
    };
    for (const player in pct_Players){
        if(MoreRunScorer.totalScore<pct_Players[player].totalScore){
            MoreRunScorer=pct_Players[player];
        }
    }
   return MoreRunScorer;
}

export function getCaptains(){
    const Captains={};
    for (const player in pct_Players){
        if (pct_Players[player].captain===true){
            Captains[player]=pct_Players[player];
        }
    }
    return Captains;
}

export function getPlayerByName(name) {
    const playerData = pct_Players[name];
    if (playerData) {
        return playerData;
    } else {
        return { error: "Player not found" };
    }
}