export default function Wallet() {
  return (
    <div>
      <div>
        <h2>Your Wallet</h2>
      </div>
      <div>
        <p>Tokens</p>
        <div>
          <h4>Total balance</h4>
          <p className="font-bold font-sans text-2xl">10,000 US$</p>
        </div>
        <table className="md:container md:mx-auto align-content: flex-start">
          <thead>
            <tr className="text-left">
              <th>Cryptocurrency</th>
              <th>Balance</th>
              <th>Price</th>
              <th>1h Change</th>
              <th>Send</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>icon</p>
                <p>Tether</p>
                <p>USDT</p>
              </td>
              <td>9,5000 USDT</td>
              <td>1,00 US$</td>
              <td>-0,01$</td>
              <td>
                <a href="#">Transfer Now</a>
              </td>
            </tr>
            <tr>
              <td>
                <p>icon</p>
                <p>Solana</p>
                <p>SOL</p>
              </td>
              <td>500 SOL</td>
              <td>1,00 US$</td>
              <td>-0,01$</td>
              <td>
                <a href="#">Transfer Now</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
