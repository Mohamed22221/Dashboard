import React from 'react'
import './BigWidget.css'
//members
import man1 from"../../img/man1.jpg"
import man2 from"../../img/man2.jpg"
import man3 from"../../img/man3.jpg"
import woman1 from"../../img/woman1.jpeg"
import woman2 from"../../img/woman2.jpeg"
const BigWidget = () => {

const Button = ({type}) =>{
  return (<button className={'button-tabel' + type}>{type}</button>)
}

  return (
    <div className='main-bigwidge'>
      <h3>Latest Transaction</h3>
      <table className='main-table'>
      <thead>
      <tr className='title-tabel'>
        <th>Customer</th>
        <th>Data</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
      </thead>  
      <tbody>
      <tr className='row-tapel'>
        <td className='about-tabel'>
          <img src={man2} />
          <span>Ali Hamdy</span>
        </td>
        <td className='date-tabel'>
          <span>2 jun 2022</span>
        </td>
        <td className='amount-tapel'>
          <span>$122.5</span>
        </td>
        <td className='amount-tapel'>
          <Button type="Approved" />
        </td>

      </tr>
      <tr className='row-tapel'>
        <td className='about-tabel'>
          <img src={man1} />
          <span>samy morad</span>
        </td>
        <td className='date-tabel'>
          <span>4 jun 2022</span>
        </td>
        <td className='amount-tapel'>
          <span>$149.5</span>
        </td>
        <td className='amount-tapel'>
        <Button type="Decliend" />

        </td>

      </tr>
      <tr className='row-tapel'>
        <td className='about-tabel'>
          <img src={woman2} />
          <span>sama sayed</span>
        </td>
        <td className='date-tabel'>
          <span>2 Mar 2022</span>
        </td>
        <td className='amount-tapel'>
          <span>$222.5</span>
        </td>
        <td className='amount-tapel'>
        <Button type="Pending" />

        </td>

      </tr>
      <tr className='row-tapel'>
        <td className='about-tabel'>
          <img src={man3} />
          <span>ahmed sayed</span>
        </td>
        <td className='date-tabel'>
          <span>1 juv 2022</span>
        </td>
        <td className='amount-tapel'>
          <span>$402.5</span>
        </td>
        <td className='amount-tapel'>
        <Button type="Approved" />

        </td>

      </tr>
      <tr className='row-tapel'>
        <td className='about-tabel'>
          <img src={woman1} />
          <span>marwa sayed</span>
        </td>
        <td className='date-tabel'>
          <span>2 Fep 2022</span>
        </td>
        <td className='amount-tapel'>
          <span>$132.5</span>
        </td>
        <td className='amount-tapel'>
        <Button type="Decliend" />

        </td>

      </tr>
      </tbody>
      </table>
    </div>
  )
}

export default BigWidget