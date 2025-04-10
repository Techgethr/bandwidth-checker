# Bandwidth Checker

**Bandwidth Checker** is a subnet built for [Checker Network](https://www.checker.network/), which allows you to measure and record the bandwidth of each device in the subnet, providing greater insight into connections globally.

## Why measuring the bandwidth?
Having certainty about the bandwidth of global connections allows for better decisions for individuals (freelancers who want to move to other cities to work and live, people who want to live in better cities, etc.) and companies that want to establish new offices in other parts of the world.

Currently, it is very difficult to know the true quality of the connection in each city, due to contradictory reports. For example, Chile has one of the best internet connections in the world, and Viña del Mar and Valparaíso (two cities that are part of a conurbation) have been highlighted for this. Valparaíso was named as the city with the fastest connection in the world in the [Speedtest Global Index 2024](https://eie.pucv.cl/2025/01/16/valparaiso-lidera-en-conectividad-destaca-como-urbe-con-internet-fija-mas-rapida-del-mundo/#:~:text=Valpara%C3%ADso%2C%20conocida%20por%20su%20patrimonio,Abu%20Dhabi%20y%20Nueva%20York.), while at the same time, on [Nomads.com](https://nomads.com/), Viña del Mar (which has the same connection quality) appears as a city with a poor connection.

That is, there is no way to know or trust any of the sources because there is no data to corroborate it.

## Creating a measurement network

**Bandwidth Checker**, like a PIN network, allows each participant to record their connection, by analyzing speed on different websites and leaving a permanent record.

Currently, the network records bandwidth (in Mbps), download duration in seconds, the URL used for measurement, and the node's IP (for later use as geolocation).

```javascript
    { 
        retrievalSucceeded: "boolean", 
        estimatedSpeedMbps: "bandwidth in Mbps", 
        downloadTimeSeconds: "duration in seconds", 
        url: "Site used for the measure", 
        ip: "Node IP, for geolocation" 
    };
```

If a record cannot be made, only _retrievalSucceeded_ is marked as **false**, and no other data is recorded.

## Pending

The node was tested in a local environment, and we're now building a resilient, publicly available API that logs everything to IPFS at a cost to our company (Techgethr), and also:

- We'll enable a dedicated site.
- We'll produce a whitepaper (possibly tokenomics).
- A plan to sell the data to interested companies and reward the nodes.



## How to use

Install [Zinnia CLI](https://github.com/filecoin-station/zinnia).

```bash
$ # Lint
$ npx lint
$ # Run module
$ zinnia run main.js
$ # Test module
$ zinnia run test.js
```

## Release

On a clean working tree, run the following command:

```bash
$ ./release.sh <semver>
$ # Example
$ ./release.sh 1.0.0
```

Use GitHub's changelog feature to fill out the release notes.

Publish the new release and let the CI/CD workflow upload the sources
to IPFS & IPNS.
