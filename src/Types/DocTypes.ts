// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import Card from "./Card";

export interface Player {
	pfp: string;
	roomId: string;
	uid: string;
	username: string;
	cards: Card[];
}

export interface RoomDoc {
	uid: string;
	currentCard: Card;
	currentDirection: "cw" | "ccw";
	currentPlayerUid: string;
	players: Player[];
	lastCards: Card[];
	roomId: string;
	started: boolean;
}
