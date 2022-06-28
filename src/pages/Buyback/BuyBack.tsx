import './BuyBack.css'
import 'animate.css'
import './styles.css'

import React from 'react'
import styled from 'styled-components/macro'

import Path23 from '../../assets/images/Path23.png'
import { DarkCard, LightGreyCard, PinkTableCard } from '../../components/Card'
const Styledtext = styled.text``
const StyledCardtext = styled.text`
  justify-content: 'center',
  position: relative,
  bottom: '10px',
`
export default function BuybackTable() {
  return (
    <>
      <div className={'testimage'} style={{ backgroundImage: `url(${Path23})` }}>
        <div className={'darktext'}>
          <div className={'flexbox-container'}>
            <Styledtext style={{ marginRight: '250px', position: 'relative', left: 40 }}>Date</Styledtext>
            <Styledtext style={{ marginRight: '90px' }}> Token </Styledtext>
            <Styledtext style={{ marginRight: '75px' }}> Amount (USD) </Styledtext>
            <Styledtext style={{ marginRight: '100px' }}> Entry Price</Styledtext>
            <Styledtext style={{ marginRight: '110px' }}> Tokens </Styledtext>
            <Styledtext style={{ marginRight: '70px' }}> Profit %</Styledtext>
          </div>
          <LightGreyCard style={{ borderLeft: '20px', marginBottom: '30px', maxHeight: '36px' }}>
            <div className={'flexbox-container'}>
              <Styledtext style={{ marginRight: '150px' }}> 2022-02-01 </Styledtext>
              <PinkTableCard
                style={{ marginRight: '70px', maxWidth: '100px', maxHeight: '35px', position: 'relative', bottom: 15 }}
              >
                {' '}
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}>MRI </StyledCardtext>{' '}
              </PinkTableCard>
              <PinkTableCard
                style={{
                  marginRight: '70px',
                  maxWidth: '100px',
                  maxHeight: '35px',
                  textAlign: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  bottom: 15,
                }}
              >
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> $11,000</StyledCardtext>
              </PinkTableCard>

              <PinkTableCard
                style={{
                  marginRight: '70px',
                  maxWidth: '100px',
                  maxHeight: '35px',
                  textAlign: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  bottom: 15,
                }}
              >
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> 0.006</StyledCardtext>
              </PinkTableCard>

              <PinkTableCard
                style={{
                  marginRight: '70px',
                  maxWidth: '100px',
                  maxHeight: '35px',
                  textAlign: 'center',
                  position: 'relative',
                  bottom: 15,
                }}
              >
                {' '}
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> 20,000</StyledCardtext>{' '}
              </PinkTableCard>
              <PinkTableCard
                style={{ marginRight: '70px', maxWidth: '100px', maxHeight: '35px', position: 'relative', bottom: 15 }}
              >
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> 6% </StyledCardtext>{' '}
              </PinkTableCard>
            </div>
          </LightGreyCard>
          <LightGreyCard style={{ borderLeft: '20px', marginBottom: '30px', maxHeight: '36px' }}>
            <div className={'flexbox-container'}>
              <Styledtext style={{ marginRight: '150px' }}> 2022-02-01 </Styledtext>
              <PinkTableCard
                style={{ marginRight: '70px', maxWidth: '100px', maxHeight: '35px', position: 'relative', bottom: 15 }}
              >
                {' '}
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}>MRI </StyledCardtext>{' '}
              </PinkTableCard>
              <PinkTableCard
                style={{
                  marginRight: '70px',
                  maxWidth: '100px',
                  maxHeight: '35px',
                  textAlign: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  bottom: 15,
                }}
              >
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> $11,000</StyledCardtext>
              </PinkTableCard>

              <PinkTableCard
                style={{
                  marginRight: '70px',
                  maxWidth: '100px',
                  maxHeight: '35px',
                  textAlign: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  bottom: 15,
                }}
              >
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> 0.006</StyledCardtext>
              </PinkTableCard>

              <PinkTableCard
                style={{
                  marginRight: '70px',
                  maxWidth: '100px',
                  maxHeight: '35px',
                  textAlign: 'center',
                  position: 'relative',
                  bottom: 15,
                }}
              >
                {' '}
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> 20,000</StyledCardtext>{' '}
              </PinkTableCard>
              <PinkTableCard
                style={{ marginRight: '70px', maxWidth: '100px', maxHeight: '35px', position: 'relative', bottom: 15 }}
              >
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> 6% </StyledCardtext>{' '}
              </PinkTableCard>
            </div>
          </LightGreyCard>
          <LightGreyCard style={{ borderLeft: '20px', marginBottom: '30px', maxHeight: '36px' }}>
            <div className={'flexbox-container'}>
              <Styledtext style={{ marginRight: '150px' }}> 2022-02-01 </Styledtext>
              <PinkTableCard
                style={{ marginRight: '70px', maxWidth: '100px', maxHeight: '35px', position: 'relative', bottom: 15 }}
              >
                {' '}
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}>MRI </StyledCardtext>{' '}
              </PinkTableCard>
              <PinkTableCard
                style={{
                  marginRight: '70px',
                  maxWidth: '100px',
                  maxHeight: '35px',
                  textAlign: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  bottom: 15,
                }}
              >
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> $11,000</StyledCardtext>
              </PinkTableCard>

              <PinkTableCard
                style={{
                  marginRight: '70px',
                  maxWidth: '100px',
                  maxHeight: '35px',
                  textAlign: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  bottom: 15,
                }}
              >
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> 0.006</StyledCardtext>
              </PinkTableCard>

              <PinkTableCard
                style={{
                  marginRight: '70px',
                  maxWidth: '100px',
                  maxHeight: '35px',
                  textAlign: 'center',
                  position: 'relative',
                  bottom: 15,
                }}
              >
                {' '}
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> 20,000</StyledCardtext>{' '}
              </PinkTableCard>
              <PinkTableCard
                style={{ marginRight: '70px', maxWidth: '100px', maxHeight: '35px', position: 'relative', bottom: 15 }}
              >
                <StyledCardtext style={{ position: 'relative', bottom: 10 }}> 6% </StyledCardtext>{' '}
              </PinkTableCard>
            </div>
          </LightGreyCard>
        </div>
        <div className={'flexbox-vertical-container'}>
          <body>
            <LightGreyCard>
              <h1
                style={{
                  textAlign: 'center',
                  color: '#000000',
                  fontWeight: 'bold',
                  fontFamily: 'Geneva, Verdana, sans-serif',
                  alignItems: 'center',
                  position: 'relative',
                  left: 25,
                }}
              >
                Treasury Holdings.
              </h1>
              <p></p>
              <div className={'animate__animated animate__backInRight'}>
                <table id="customers" style={{ position: 'relative', maxWidth: '800px', width: 800, left: 200 }}>
                  <tr>
                    <th>Date</th>
                    <th>Token </th>
                    <th>Amount(USD)</th>
                    <th>Details</th>
                  </tr>
                  <tr>
                    <td>2022-04-2</td>
                    <td>MRI</td>
                    <td>$5,150</td>
                    <td>
                      {' '}
                      <Styledtext>Entry Price: $0.06269</Styledtext>
                      {''} {''}
                      <Styledtext>{''} # of Tokens: 82,308</Styledtext>
                      <a href="https://www.dextools.io/app/ether/pair-explorer/0xaae64809138f576b0b50f1d898dd99055327c2d3">
                        Chart
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-4-4</td>
                    <td>SHI</td>
                    <td>$6,892</td>
                    <td>
                      {' '}
                      <Styledtext>Entry Price: $0.00000116</Styledtext>
                      {''} {''}
                      <Styledtext>{''} # of Tokens: 5,946,728,390</Styledtext>
                      <a href="https://www.dextools.io/app/ether/pair-explorer/0x959c7d5706ac0b5a29f506a1019ba7f2a1c70c70">
                        Chart
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2022-4-5</td>
                    <td>STILT</td>
                    <td>$3,448</td>
                    <td>
                      {' '}
                      <Styledtext>Entry Price: $0.00000258</Styledtext>
                      {''} {''}
                      <Styledtext>{''} # of Tokens: 1,332,134,712</Styledtext>
                      <a href="https://www.dextools.io/app/ether/pair-explorer/0x779dac1f4df345acb6ee814afda755f1693770cb">
                        Chart
                      </a>
                    </td>
                  </tr>
                </table>
                <div className={'darktext'}>
                  <DarkCard
                    style={{
                      textAlign: 'center',
                      position: 'relative',
                      left: 250,
                      maxWidth: '700px',
                      alignItems: 'center',
                    }}
                  >
                    {' '}
                    <Styledtext>Trade Balance: $15,651 </Styledtext>
                  </DarkCard>
                  <div className={'flexbox-container'}>
                    <DarkCard
                      style={{
                        textAlign: 'center',
                        position: 'relative',
                        left: 250,
                        maxWidth: '700px',
                        alignItems: 'center',
                      }}
                    >
                      {' '}
                      <Styledtext>USDC Balance: $53,643 </Styledtext>
                    </DarkCard>
                    <DarkCard
                      style={{
                        textAlign: 'center',
                        position: 'relative',
                        left: 250,
                        maxWidth: '700px',
                        alignItems: 'center',
                      }}
                    >
                      {' '}
                      <Styledtext> ETH Balance: $1,653 </Styledtext>
                    </DarkCard>
                  </div>
                  <DarkCard
                    style={{
                      textAlign: 'center',
                      position: 'relative',
                      left: 250,
                      maxWidth: '400px',
                      borderRadius: '25px',
                      alignItems: 'center',
                    }}
                  >
                    {' '}
                    <Styledtext>Total Treasury: $70,946 </Styledtext>
                  </DarkCard>
                </div>
              </div>
            </LightGreyCard>
            <p></p>
            <p></p>
            <LightGreyCard>
              <h1
                style={{
                  textAlign: 'center',
                  color: '#000000',
                  fontWeight: 'bold',
                  fontFamily: 'Geneva, Verdana, sans-serif',
                }}
              >
                Buyback Table
              </h1>
              <p></p>
              <div className={'animate__animated animate__backInRight'}>
                <table id="customers" style={{ position: 'relative', left: 100, maxWidth: '800px', width: 'auto' }}>
                  <tr>
                    <th>Date</th>
                    <th>Amount(ETH)</th>
                    <th>Amount(USD)</th>
                    <th>Tx hash</th>
                  </tr>
                  <tr>
                    <td>2022-03-29</td>
                    <td>0.69</td>
                    <td>$2344</td>
                    <td>
                      {' '}
                      <a
                        style={{
                          borderImage: 'linear-gradient(45deg, rgb(122, 9, 125), rgb(219, 0, 48), rgb(179, 2, 181)) 1',
                        }}
                        href="https://etherscan.io/tx/0x06561406c42186925cafd9a59c75c4a2fd084d210e949e16af36739836a61c16"
                      >
                        0x06561406c42186925cafd9a59c75c4a2fd084d210e949e16af36739836a61c16
                      </a>{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>2022-3-29</td>
                    <td>.32</td>
                    <td>$1,147</td>
                    <td>
                      {' '}
                      <a href="https://etherscan.io/tx/0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751">
                        0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751
                      </a>{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>2022-3-29</td>
                    <td>.42</td>
                    <td>$1,447</td>
                    <td>
                      {' '}
                      <a href="https://etherscan.io/tx/0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751">
                        0x0aef3d45ca08854dc30e22529ccc51b4b4933bf01ffcf0229a6fdf52ee27b751
                      </a>{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>2022-3-29</td>
                    <td>.499</td>
                    <td>$1,692</td>
                    <td>
                      {' '}
                      <a href="hhttps://etherscan.io/tx/0x2d47bbac58b49f9162150d8b212172451698fc58f840bcc42444348f382be70b">
                        0x2d47bbac58b49f9162150d8b212172451698fc58f840bcc42444348f382be70b
                      </a>{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>2022-3-29</td>
                    <td>.61</td>
                    <td>$1,751</td>
                    <td>
                      {' '}
                      <a href="https://etherscan.io/tx/0xea293aee48642deb1230a8be90e5b4ee7d96a71d97c0464f396e0ec921b2cfc4">
                        0xea293aee48642deb1230a8be90e5b4ee7d96a71d97c0464f396e0ec921b2cfc4
                      </a>{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>2022-4-3</td>
                    <td>.76</td>
                    <td>$2686</td>
                    <td>
                      {' '}
                      <a href="https://etherscan.io/tx/0xe6b5dbc1d5bfc4c2506436ba918bbdfd16fe85a73f841c536bfb935d679bfa46">
                        0xe6b5dbc1d5bfc4c2506436ba918bbdfd16fe85a73f841c536bfb935d679bfa46
                      </a>{' '}
                    </td>
                  </tr>
                </table>
              </div>
            </LightGreyCard>
          </body>
        </div>
      </div>
    </>
  )
}
