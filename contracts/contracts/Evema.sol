// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Evema is Ownable, ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private tokenId;

    struct EventData {

        address creator;
        string metadata;
        string category;
        uint256 eventId;
        uint256 ticketsBought;
        uint256 max_ticket;
        uint256 ticket_price;
        uint256 startTime;
        uint256 endSales;
        bool eventPast;
    }

    uint256 private event_count = 0;

    EventData[] public events;

    mapping(uint256 => EventData) public getEventByIds;
    mapping(address => EventData[]) public bookedEvents;
    mapping(address => uint256[]) public userNftTokens;
    mapping (address => EventData[]) public creatorEvents;

    event newEventCreated(address indexed creator,uint256 indexed time, uint256 eventId);
    event newTicketBooked(address indexed user, uint256 tokenId, uint256 eventId);

    constructor() ERC721("EvemaNFT","EVEMA") {
        tokenId.increment();
    }

    function bookTickets(uint256 _eventId) payable public {
        EventData storage _event = getEventByIds[_eventId];
        require(msg.value >= _event.ticket_price);
        require(block.timestamp <= _event.endSales, "Sales ended");
        require(_event.ticketsBought <= _event.max_ticket, "Sold out");

        string memory tokenURI = string(abi.encodePacked(_event.metadata));
        _safeMint(msg.sender, tokenId.current());
        _setTokenURI(tokenId.current(), tokenURI);

        uint256 fee = (msg.value * 10) / 1000;
        uint amountToCreator = msg.value - fee;

        (bool success,)= payable(_event.creator).call {value: amountToCreator}("");
        require(success);


        _event.ticketsBought++;
        bookedEvents[msg.sender].push(_event);
        userNftTokens[msg.sender].push(tokenId.current());

        emit newTicketBooked(msg.sender, tokenId.current(), _event.eventId);
        tokenId.increment();
    }



    function createEvent(uint256 _max_ticket_number, uint256 _startTime,uint256 _endSales, uint256 _amountPerTicket, string memory _metadata, string memory _category) external{

        EventData memory _event = EventData({
            creator: msg.sender,
            eventId: event_count,
            startTime: _startTime,
            max_ticket: _max_ticket_number,
            ticket_price: _amountPerTicket,
            ticketsBought: 0,
            metadata: _metadata,
            category: _category,
            endSales: block.timestamp + _endSales,
            eventPast: false
        });

        getEventByIds[event_count] = _event;
        events.push(_event);
        creatorEvents[msg.sender].push(_event);

        event_count++;
        emit newEventCreated(_event.creator, block.timestamp, _event.eventId);
    }

    function startAndEndSales(uint256 _eventId, uint256 _start, uint256 _end) external {
        getEventByIds[_eventId].startTime = (block.timestamp + _start);
        getEventByIds[_eventId].endSales = (block.timestamp + _end);
    }

    
    function withdraw() onlyOwner public{
        (bool success,)= payable(owner()).call {value:address(this).balance}("");
        require(success);
    }

    //GETTERS

    function usersTokens(address _user) view public returns(uint256[] memory){
        return userNftTokens[_user];
    }

    function eventsBookedByUser(address _user) view public returns(EventData[] memory){
        return bookedEvents[_user];
    }

    function createdEvents(address _user) view public returns(EventData[] memory){
        return creatorEvents[_user];
    }

    function numberOfEvents() public view returns(uint){
        return events.length;
    }

    function allEvents() public view returns(EventData[] memory){
        return events;
    }

    function ticketsSold(uint256 _eventId) view public returns(uint){
        return getEventByIds[_eventId].ticketsBought;
    }

    function isEventOn(uint _eventId) view public returns(bool){
        return getEventByIds[_eventId].eventPast;
    }

    function getByCategory(string memory _category) public view returns(EventData[] memory ){
        uint i = 0;
        uint arrayCount = 0;
	    EventData[] memory newCategory = new EventData[](events.length);

        for (; i < events.length; i++){
            EventData memory currentEvent = events[i];

            if (keccak256(abi.encodePacked(currentEvent.category)) == keccak256(abi.encodePacked(_category))){
                newCategory[arrayCount] = currentEvent;
                arrayCount++;
            }
        }

        return newCategory;
    }

    // Delete event from different memory locations by the creator
    // This operation contains loops and is expensive
    // User should be notified
    function deleteEvent(uint _eventId) external {
        
        uint i = 0;
        uint envIndex = 0;
        EventData storage _event = getEventByIds[_eventId];
        require(_event.creator == msg.sender, "Not Authorised");
        require(_event.ticketsBought == 0,"Tickets already bought");

        // Delete from creatorEvents array
        for (; i < creatorEvents[msg.sender].length - 1; i++){
            EventData memory _newEv = creatorEvents[msg.sender][i];
            if (_newEv.eventId == _eventId){
                break;
            }
        }
        for (uint index = i; index < creatorEvents[msg.sender].length-1; index++){
            creatorEvents[msg.sender][index] = creatorEvents[msg.sender][index + 1];
        }
        creatorEvents[msg.sender].pop();

        // Delete from general events array

        for (; envIndex < events.length - 1; envIndex++){
            EventData memory _anotherEv = events[envIndex];
            if (_anotherEv.eventId == _eventId){
                break;
            }
        }

        for (uint index = envIndex; index < events.length - 1; index++){
            events[index] = events[index + 1];
        }
        events.pop();

        // Delete from getEventsById mapping
        delete getEventByIds[_eventId];
    }

    function deleteEventAdmin(uint256 _eventId) onlyOwner external {
        uint envIndex = 0;
        // Delete from general events array

        for (; envIndex < events.length - 1; envIndex++){
            EventData memory _anotherEv = events[envIndex];
            if (_anotherEv.eventId == _eventId){
                break;
            }
        }

        for (uint index = envIndex; index < events.length - 1; index++){
            events[index] = events[index + 1];
        }
        events.pop();

    }
}
