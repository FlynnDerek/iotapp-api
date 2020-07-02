# iotapp-api
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

An easy API for building IoT powered dApps with iotapp. 

## Overview
The iotapp project aims to help developers and teams to integrate, manage and deploy their IoT devices across a decentralized network. Working in conjunction with the [iotapp Console](http://iotapp-alpha.surge.sh/#/login), this package aims to allow for fast prototyping and deployment of dApps built on the network. Get your app keys and start developing for free [here](http://iotapp-alpha.surge.sh/#/register).


To learn more, please visit [our website](http://iotapp-alpha.surge.sh/#/). 

## Installation

Use [NPM](https://www.npmjs.com/get-npm) to install iotapp-api

```bash
npm install iotapp-api
```

## Usage

#### Import
```javascript
import iotapp from "iotapp-api";
```

#### Get Public Blockchain
Call this function to return a copy of the entire iotapp blockchain.
```Javascript
var chainData = [];

iotapp.getPublicChain()
.then(data => this.chainData = data)
```


#### Get Private Transactions
Pass your channel app key(s) as an argument to get and display each transaction and it's data. 
```Javascript
var chainData = [];

iotapp.getPublicChain("app_key_1", "app_key_2")
.then(data => this.chainData = data)
```

#### Get Latest Transaction
Pass your app key(s) as an argument to get and display the latest data.
```Javascript
var chainData = [];

iotapp.getLatestTx("app_key_1", "app_key_2")
.then(data => this.chainData = data)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
