# SuperStreamFund
A Cross-chain Crowdfunding application built with Superfluid and Lens Protocol.

<p align="center">
  <img src="https://user-images.githubusercontent.com/95926324/219892186-d51fed8f-aed4-4d2a-954a-c02cb5a05792.png" height="120" width="120" align="center" />
</p>

Deployed Contract's Address - 0x0974ccB10568d07D531CAa3F00bf457F87a6E6b8
https://mumbai.polygonscan.com/address/0x0974ccB10568d07D531CAa3F00bf457F87a6E6b8

ERC 1155 NFT's - 0x31Fd8c44a1869C48D054d8431Fb8F62C746494EF will be dropped to some of the early supporters of the respective campaigns inorder to incentivise them.

Integrating NFTs (Non-Fungible Tokens) in a crowdfunding dapp can provide a new and exciting way for backers to participate and support a project.
The owner of the campaign can send ERC-1155 NFT's to some of the early supporters of the campaign thereby incentivising the backers to participate with greater zeal.

# Problems aimed to Solve
Interoperability: By leveraging different blockchain networks, SuperStreamFund application can facilitate the transfer of funds between different cryptocurrencies, making it easier for users to contribute to projects regardless of the cryptocurrency they hold.

Accessibility: SuperStreamFund can increase accessibility to crowdfunding by allowing users to contribute with different cryptocurrencies, lowering the barriers to entry for those who may not have the same currency as the platform.

Security: Blockchain-based crowdfunding is inherently more secure, as the funds are held in smart contracts that are transparent and tamper-proof. Additionally, the decentralized nature of the blockchain network means that the funds are not held by a centralized authority, reducing the risk of fraud or other malicious activities.

Transparency: Smart contracts on the blockchain provide a high level of transparency, enabling contributors to track the progress of the project and the allocation of funds in real-time. This increases trust and accountability between the project owner and contributors.

Global reach: SuperStreamFund has the potential to reach a global audience, as the platform is not tied to a particular country or jurisdiction, making it easier to raise funds from a diverse pool of contributors around the world.

<h1>Features of the platform</h1>

## Start a campaign by providing required information or Browse through different campaigns available on the platform

![image](https://user-images.githubusercontent.com/95926324/219902226-bceca6c7-07f9-400d-821c-bf898e453758.png)


## Fund the campaign to support 🚀 
![image](https://user-images.githubusercontent.com/95926324/219901968-fffec84e-2561-4c02-8a3f-052362aaf56a.png)

## Stream Money for supporting in terms of Tokens DAI/ USDC 

![image](https://user-images.githubusercontent.com/95926324/219885034-6da65b45-c8e7-4397-96e0-b95884a8d405.png)

## We are utilising Money Streams in our dapp - Constant Flow Agreement (CFA): move tokens in constant-rate by-the-second streams between accounts with no capital lock up.

![image](https://user-images.githubusercontent.com/95926324/219885338-0855fb2b-31ef-4dad-b268-15e90a559c9f.png)


## Before funding / starting a stream the supporters might want to take a look at the market prices of the tokens that they have (Powered by Chainlink & Quicknode)
![image](https://user-images.githubusercontent.com/95926324/219902105-5bf0e524-d464-46f8-b9f9-7d874e776e84.png)


## Push Notifications and Chat Messaging directly in the dapp
Campaign owners- Get Notified when a supporter funds your campaign.

For Supporters- Get Notified when there are important updates about the campaigns you are suppoting.
The stage of improvements going on, NFT drops, Money Stream Informations etc.

![image](https://user-images.githubusercontent.com/95926324/219762719-ea46321c-5f5a-4fe2-980e-61f4fba7b59e.png)

<p align="center">
  <img src="https://user-images.githubusercontent.com/95926324/219763839-bd57ec8c-98a3-4937-96b3-c4724c8d63e0.png"  />
</p>

# Xapp Nested calls using Connext

Multiple blockchain support: SuperStreamFund can use nested xcalls to interact with different blockchain networks to facilitate cross-chain transactions. 
When a user backs a campaign with cryptocurrency, the application can initiate a nested xcall to transfer the funds to the project owner's wallet on a different blockchain network. 
This can be especially useful if the project owner prefers to receive payments on a specific blockchain network.

More About this explained here-> https://github.com/legendarykamal/SuperStreamFund/tree/dev/hardhat-contract#readme
