import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
         <h1>-: Table using React :-</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Designation</th>
          <th colspan="2">Adress</th>
          
        </thead>
        <tbody>
          <tr>
            <td>Shubham</td>
            <td>Full Stack</td>
            <td>dubeyshubham902@gmail.com</td>
          </tr>
          <tr>
            <td>Shubham</td>
            <td>Full Stack</td>
            <td>dubeyshubham902@gmail.com</td>
          </tr>
          <tr>
            <td>Shubham</td>
            <td>Full Stack</td>
            <td>dubeyshubham902@gmail.com</td>
          </tr>
        </tbody>
        <tfoot>
          <th colspan="3">Performance gd</th>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
