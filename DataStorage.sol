pragma solidity 0.8.0;

contract DataStorage {
    uint[] public ids;

    function get(uint position) view public returns(uint) {
        return ids[position];
    }
}