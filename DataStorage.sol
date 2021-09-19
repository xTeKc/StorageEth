pragma solidity 0.8.0;

contract DataStorage {
    uint[] public ids;

    function get(uint position) view public returns(uint) {
        return ids[position];
    }

    function getAll() view public returns(uint[] memory) {
        return ids;
    }

    function length() view public returns(uint) {
        return ids.length;
    }
}