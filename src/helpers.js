import { pct_Players } from "./player.js";

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
        if (pct_Players[player].role === "AllRounder") {
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

export function getPlayerByName(name) {
    const playerData = pct_Players[name];
    if (playerData) {
        return playerData;
    } else {
        return { error: "Player not found" };
    }
}