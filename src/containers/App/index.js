import React, { useEffect, useState } from 'react';

import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { ethers } from 'ethers';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import symbolMap from './symbols'

export const providerOptions = {
    walletconnect: {
        package: WalletConnect,
        options: {
            infuraId: '0ccd8c04f3ee4d12ade2cc44113b0fd1'
        }
    },
    coinbasewallet: {
        package: CoinbaseWalletSDK,
        options: {
            appName: "OSIS Quick Import Crypto Token",
            infuraId: '0ccd8c04f3ee4d12ade2cc44113b0fd1'
        }
    },
};
const web3Modal = new Web3Modal({
	network: "mainnet",
	theme: "dark",
	cacheProvider: true,
	providerOptions 
});

function App() {

    const [provider, setProvider] = useState();
    const [library, setLibrary] = useState();
    const [account, setAccount] = useState();
    const [network, setNetwork] = useState();
    const [notInstalledAlert, setNotInstalledAlert] = useState(false);
    const [currentChainId, setCurrentChainId] = useState();


    useEffect(() => {

    }, []);

        const connectWallet = async () => {
            try {
                const provider = await web3Modal.connect();
                const library = new ethers.providers.Web3Provider(provider);
                const accounts = await library.listAccounts();
                const network = await library.getNetwork();
                setProvider(provider);
                setLibrary(library);
                if (accounts) setAccount(accounts[0]);
                setNetwork(network);
                window.ethereum.request({
                    method: "eth_chainId",
                }).then((chainId) => {
                    setCurrentChainId(parseInt(chainId, 16));
                    console.log("Chain Init:", chainId, parseInt(chainId, 16))
                })
                window.ethereum.on('chainChanged', (_chainId) => {
                    console.log("Chain Change:", _chainId, parseInt(_chainId, 16))
                    setCurrentChainId(parseInt(_chainId, 16));
                });
            } catch (e) {
                setNotInstalledAlert(true);
                console.error(e)
              }
            };







    const importToken = async (symbol) => {
        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    symbol: symbol.tokenSymbol,
                    address: symbol.tokenAddress,
                    decimals: symbol.tokenDecimals,
                    image: symbol.tokenImage,
                },
            },
        })
            .then((result) => {
                if (result) {
                    console.log("Success!")
                } else {
                    console.warn("Failure")
                };
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const multiImport = async (symbols) => {
        for (let i = 0; i < symbols?.length; i++) {
            importToken(symbols[i])
        }
    }





    const symbolList = symbolMap[currentChainId]?.map((symbol, idx) => (
        <Col xs={6} md={4} lg={3} key={idx}>
            <Card className="text-center" key={symbol.tokenSymbol} style={{ marginTop: 'calc(var(--bs-gutter-x) * .5)', marginBottom: 'calc(var(--bs-gutter-x) * .5)', }}>
                <Card.Header as="h4">{symbol.tokenSymbol}</Card.Header>
                <Card.Img src={symbol.tokenImage} style={{ padding: '5%' }} />
                <Card.Body className="text-start">
                    <Card.Subtitle>Address:</Card.Subtitle>
                    <Card.Text>
                        {symbol.tokenAddress}
                    </Card.Text>
                    <Card.Subtitle>Decimals:</Card.Subtitle>
                    <Card.Text>
                        {symbol.tokenDecimals}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="btn" onClick={() => importToken(symbol)}>
                    <b>➕ Add Token</b>
                </Card.Footer>
            </Card>
        </Col>
    ));

    return (
        <Container className="App">

            <button onClick={connectWallet}>Connect Wallet</button>
            <div>Wallet Address: {account}</div>

            {
                notInstalledAlert ? (
                    <Alert variant="danger">
                        Wallet not connected.
                    </Alert>
                ) : symbolMap[currentChainId] ? (
                    <div>
                        <Row>
                            {symbolList}
                        </Row>
                        <Row style={{ margin: '0rem' }}>
                            <Button variant="warning" size="lg" onClick={() => multiImport(symbolMap[currentChainId])}>Import All Tokens 🚀🚀🚀</Button>
                        </Row>
                    </div>
                ) : (
                    <Alert variant="warning">
                        Currently only support <b>Ethereum (1), Binance Smart Chain (56), Polygon (137), Rinkeby (4), BSC Testnet (97), Mumbai (80001) </b> and will be automatically detected.
                    </Alert>
                )
            }
        </Container>
    );
}

export default App;