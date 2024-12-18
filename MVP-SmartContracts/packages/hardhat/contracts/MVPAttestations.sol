pragma solidity ^0.8.0;

contract MVPAttestations {

    // Structure to store attestation data
    struct Attestation {
        string bootcampName;
        string projectTitle;
        string date;
        string projectLink;
        address wallet;
        string tutor;
    }

    // Mapping to store attestations by address
    mapping(address => Attestation) public attestations;

    // Event emitted when an attestation is created
    event AttestationCreated(
        address indexed recipient, 
        string bootcampName, 
        string projectTitle,
        string date,
        string projectLink,
        string tutor
    );

    // Function to create an attestation
    function createAttestation(
        address recipient,
        string memory _bootcampName,
        string memory _projectTitle,
        string memory _date,
        string memory _projectLink,
        string memory _tutor
    ) public {
        // Create an Attestation instance
        Attestation memory attestation = Attestation({
            bootcampName: _bootcampName,
            projectTitle: _projectTitle,
            date: _date,
            projectLink: _projectLink,
            wallet: recipient, 
            tutor: _tutor
        });

        // Store the attestation
        attestations[recipient] = attestation;

        // Emit the event with indexed recipient
        emit AttestationCreated(
            recipient, 
            _bootcampName, 
            _projectTitle, 
            _date, 
            _projectLink, 
            _tutor
        );
    }

    // Function to retrieve an attestation by address
    function getAttestation(address recipient) public view returns (Attestation memory) {
        return attestations[recipient];
    }
}