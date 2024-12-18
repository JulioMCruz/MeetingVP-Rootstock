// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/access/AccessControl.sol";

/// @title MVP DApp User Management Contract
/// @notice This contract manages users, their roles, and memberships in the MVP DApp.
contract MVPUserManager is AccessControl {
    // Define roles
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    // Membership levels
    enum Membership { Free, Silver, Gold, Platinum }

    // User struct
    struct User {
        bytes32 encryptedUserId; // Encrypted user ID
        bool isMentor;           // Mentor status
        Membership membership;  // Membership level
    }

    // User storage
    mapping(address => User) private users;

    // Events
    event UserCreated(address indexed user, bytes32 encryptedUserId, bool isMentor, Membership membership);
    event UserUpdated(address indexed user, bytes32 encryptedUserId, bool isMentor, Membership membership);
    event UserDeleted(address indexed user);

    /// @dev Initialize the contract and set the deployer as admin.
    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// @notice Create a new user.
    /// @param user The user's wallet address.
    /// @param encryptedUserId The encrypted user ID.
    /// @param isMentor Whether the user is a mentor.
    /// @param membership The membership level.
    function createUser(
        address user,
        bytes32 encryptedUserId,
        bool isMentor,
        Membership membership
    ) external onlyRole(ADMIN_ROLE) {
        require(users[user].encryptedUserId == 0, "User already exists");
        users[user] = User(encryptedUserId, isMentor, membership);
        emit UserCreated(user, encryptedUserId, isMentor, membership);
    }

    /// @notice Read user details.
    /// @param user The user's wallet address.
    /// @return User struct containing user details.
    function getUser(address user) external view returns (User memory) {
        require(users[user].encryptedUserId != 0, "User does not exist");
        return users[user];
    }

    /// @notice Update a user's details.
    /// @param user The user's wallet address.
    /// @param encryptedUserId The encrypted user ID.
    /// @param isMentor Whether the user is a mentor.
    /// @param membership The membership level.
    function updateUser(
        address user,
        bytes32 encryptedUserId,
        bool isMentor,
        Membership membership
    ) external onlyRole(ADMIN_ROLE) {
        require(users[user].encryptedUserId != 0, "User does not exist");
        users[user] = User(encryptedUserId, isMentor, membership);
        emit UserUpdated(user, encryptedUserId, isMentor, membership);
    }

    /// @notice Delete a user.
    /// @param user The user's wallet address.
    function deleteUser(address user) external onlyRole(ADMIN_ROLE) {
        require(users[user].encryptedUserId != 0, "User does not exist");
        delete users[user];
        emit UserDeleted(user);
    }
}