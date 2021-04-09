import React from 'react'
import '../index.css'

class CowTable extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            cows: [{
                nimi: 'Mansikki',
                ikä: '3',
                lpv: 25,
                lpvk: 150
              }, {
                nimi: 'Mustikki',
                ikä: '6',
                lpv: 15,
                lpvk: 100
              }, {
                nimi: 'Sinappi',
                ikä: '6',
                lpv: 5,
                lpvk: 45
              }]
        }
     }

    renderTableHeader = () => {
        let header = Object.keys(this.state.cows[0])
        return header.map((key, index) => {
            return <th key={index}> {key} </th>
        })
    }
    renderTableBody = () => {
        return this.state.cows.map((cow, index) => {
            const {nimi, ikä, lpv, lpvk} = cow
            return (
                <tr key={nimi}>
                    <td>{ nimi}</td>
                    <td>{ikä}</td>
                    <td>{lpv}</td>
                    <td>{lpvk}</td>
                </tr>
            )
        })
   
    }
    render() {
    
    return (
        <div>
            <table id="cows">
                <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableBody()}
                </tbody>
            </table>
        </div>
    )}
}

export default CowTable
