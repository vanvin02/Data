import React, { Component } from 'react';
import PostData from './data/data.json';

class TableData extends Component {
  render() {
    return (
      <div>
          <h1>Data loading in Table</h1>
          <table className="TFtable">
             <thead>
                <tr>
                  <th>Date</th>
                  <th>Open</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Close</th>
                  <th>Adj Close</th>
                  <th>Volume</th>
                </tr>
              </thead>
          {PostData.map((postDetail, index) => {
            return (
              <tbody>
                <tr>
                  <td>{postDetail.Date}</td>
                  <td>{postDetail.Open}</td>
                  <td>{postDetail.High}</td>
                  <td>{postDetail.Low}</td>
                  <td>{postDetail.Close}</td>
                  <td>{postDetail.Ajdclose}</td>
                  <td>{postDetail.Volume}</td>
                </tr>
              </tbody>)
          })}
          </table>
      </div>
    );
  }
}

export default TableData;