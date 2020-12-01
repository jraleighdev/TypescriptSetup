import {Scene} from 'phaser';
import CardBase from "../models/base/CardBase";
import {GameImages} from "~/enums/gameImages";
import CardDraggable from "~/models/base/CardDraggable";
import CardPlayer from "~/models/player/CardPlayer";

export default class MainScene extends Scene {

    player: CardBase | undefined;

    constructor() {
        super('MainScene');
    }

    preload() {

        Object.values(GameImages).forEach(image => {
           this.load.image(image, `images/${image}.png`);
        });

        this.load.bitmapFont('pressstart', 'font/pressstart.png', 'font/pressstart.fnt');
    }

    createPlayer() {

        const health = 100;
        const pressstart = 'pressstart';

        this.player = new CardPlayer(
            (pointer, gameObject) => {},
            this,
            'Paladin',
            +this.game.config.width / 2,
            +this.game.config.height - 200,
            health,
            health,
            0,
            'playercard',
            'paladin',
            1,
            this.createSprite(0,0, 'playercard'),
            this.createSprite( 0, 0, 'paladin'),
            this.createBitMap(0, 0, 'pressstart', 'Paladin', 16, Phaser.GameObjects.BitmapText.ALIGN_CENTER),
            this.createBitMap(0, 0, pressstart, health.toString()),
            this.createBitMap(0, 0, pressstart, health.toString(), 12),
            this.createBitMap(0, 0, pressstart, ''),
            this.createSprite(38, -80, 'armor'),
        );
    }

    private createSprite(x: number, y: number, texture: string): Phaser.GameObjects.Sprite {
        return new Phaser.GameObjects.Sprite(this, x, y, texture);
    }

    private createBitMap(x: number, y: number, font: string, text: string, size?: number, align?: number) {
        return new Phaser.GameObjects.BitmapText(this, x, y, font, text, size, align)
    }
}
