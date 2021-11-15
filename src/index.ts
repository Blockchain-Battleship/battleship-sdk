//export const Greeter = (name: string) => `Hello ${name}`;
/**
 * Battleship Connect: Enables seamless interaction with the Battleship Smart Contracts
 * @author Ebube Ud <kripsonud@gmail.com>
 */


import {Contract} from 'web3-eth-contract';
const battleship_artifacts = require('./artifacts/battleship');


export default class BattleshipConnect{

    settings = {
        rpc: "ws://localhost:8546",
        chainId: ""
    }

    battleshipContract: Contract | undefined;

    init = () => {
        this.battleshipContract = new Contract(battleship_artifacts.abi, battleship_artifacts.address);

        // var myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
        //     from: '0x1234567890123456789012345678901234567891', // default from address
        //     gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        // });
    }

   /**
    * The leafs of the merkle tree will be generated using the tiles in the 10 by 10 battleship board.
    * The Positions occupied by the ship will be indicated by the id of the ship to
   * @param {number[]} tilesOccupiedByDestroyer - The Tiles occupied by the Destroyer Ship eg [11,12]
   * @param {number[]} tilesOccupiedBySubmarine - The Tiles occupied by the Submarine Ship eg [21,22,23]
   * @param {number[]} tilesOccupiedByCruiser - The Tiles occupied by the Cruiser Ship eg [31,32,33]
   * @param {number[]} tilesOccupiedByBattleship - The Tiles occupied by the Battleship Ship eg [41,42,43,44]
   * @param {number[]} tilesOccupiedByCarrier - The Tiles occupied by the Carrier Ship eg [51,52,53,54,55]
   */
    generateMerkleTreeFromShipPositions = (tilesOccupiedByDestroyer: number[], tilesOccupiedBySubmarine: number[], tilesOccupiedByCruiser: number[], tilesOccupiedByBattleship: number[], tilesOccupiedByCarrier: number[]) => 
    {
        
    }


    /**
     * 
     * @param max min number to generate. Defaults to 100
     * @param min max number to generate. Defaults to 999
     */
    generateRandomNumber = (max: number = 100, min: number = 999) : number =>
    {
        var randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber
    }

    
}