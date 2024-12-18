// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/access/AccessControl.sol";

/// @title Meeting Payment Manager
/// @notice Manages payments for meetings between mentors and requesters, with conditional fund transfers.
contract MeetingPaymentManager is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    // Meeting status
    enum MeetingStatus { Pending, Completed, NoShow }

    // Meeting struct
    struct Meeting {
        address requester;        // The user who requested the meeting
        address mentor;           // The mentor for the meeting
        uint256 amount;           // Payment amount
        MeetingStatus status;     // Status of the meeting
        address externalProject;  // Predefined external project address
    }

    // Meeting ID counter
    uint256 private meetingIdCounter;

    // Mapping of meeting IDs to Meeting details
    mapping(uint256 => Meeting) public meetings;

    // Events
    event MeetingCreated(
        uint256 indexed meetingId,
        address indexed requester,
        address indexed mentor,
        uint256 amount,
        address externalProject
    );
    event MeetingCompleted(uint256 indexed meetingId, address indexed requester);
    event NoShow(uint256 indexed meetingId, address indexed externalProject);

    /// @dev Initialize the contract and set the deployer as admin.
    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// @notice Create a new meeting.
    /// @param mentor The mentor's address.
    /// @param externalProject The external project address for no-show funds.
    function createMeeting(address mentor, address externalProject) external payable {
        require(msg.value > 0, "Payment required");
        require(mentor != address(0), "Invalid mentor address");
        require(externalProject != address(0), "Invalid project address");

        uint256 meetingId = ++meetingIdCounter;
        meetings[meetingId] = Meeting({
            requester: msg.sender,
            mentor: mentor,
            amount: msg.value,
            status: MeetingStatus.Pending,
            externalProject: externalProject
        });

        emit MeetingCreated(meetingId, msg.sender, mentor, msg.value, externalProject);
    }

    /// @notice Mark a meeting as completed and refund the requester.
    /// @param meetingId The ID of the meeting.
    function completeMeeting(uint256 meetingId) external {
        Meeting storage meeting = meetings[meetingId];
        require(meeting.status == MeetingStatus.Pending, "Meeting already handled");
        require(msg.sender == meeting.mentor, "Only mentor can complete meeting");

        meeting.status = MeetingStatus.Completed;
        payable(meeting.requester).transfer(meeting.amount);

        emit MeetingCompleted(meetingId, meeting.requester);
    }

    /// @notice Handle a no-show and transfer funds to the external project.
    /// @param meetingId The ID of the meeting.
    function handleNoShow(uint256 meetingId) external {
        Meeting storage meeting = meetings[meetingId];
        require(meeting.status == MeetingStatus.Pending, "Meeting already handled");
        require(msg.sender == meeting.mentor, "Only mentor can handle no-show");

        meeting.status = MeetingStatus.NoShow;
        payable(meeting.externalProject).transfer(meeting.amount);

        emit NoShow(meetingId, meeting.externalProject);
    }

    /// @notice Get details of a meeting.
    /// @param meetingId The ID of the meeting.
    /// @return Meeting details.
    function getMeeting(uint256 meetingId) external view returns (Meeting memory) {
        return meetings[meetingId];
    }
}