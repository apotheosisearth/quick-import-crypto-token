import React, { useEffect, useState } from 'react';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import symbolMap from './symbols'


function App() {

    const [notInstalledAlert, setNotInstalledAlert] = useState(false);
    const [currentChainId, setCurrentChainId] = useState();

    useEffect(() => {
        try {
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
    }, []);

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
            {
                notInstalledAlert ? (
                    <Alert variant="danger">
                        Metamask has not been installed.
                    </Alert>
                ) : symbolMap[currentChainId] ? (
                    <div>
                        <Row>
                            {symbolList}
                        </Row>
                        <Row style={{ margin: '0rem' }}>
                            <Button variant="warning" size="lg" onClick={() => multiImport(symbolMap[currentChainId])}>🚀🚀🚀</Button>
                        </Row>
                    </div>
                ) : (
                    <Alert variant="warning">
                        Currently only support <b>Ethereum (1), Binance Smart Chain (56), Rinkeby (4), BSC Testnet (97),</b> and will be automatically detected.
                    </Alert>
                )
            }
        </Container>
    );
}

export default App;