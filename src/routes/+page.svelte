<script>
	import { Player } from "../lib/Player"
    
    let playerArray = [];

    

    const addPlayer =  () =>{
       let table = document.getElementById('playerTable');
       let row = table.insertRow(-1);
       let cell1 = row.insertCell(0).innerHTML = `<td>
        <label for="playerTag"></label>
        <input type="text" name="playerTag" class="playerTag" value = "player tag ...">
      </td>`;
      let cell2 = row.insertCell(1).innerHTML = `<td>
        <label for="gameID"></label>
        <input type="text" name="gameID" class="gameID">
      </td>`;
      let cell3 = row.insertCell(2).innerHTML = `<td>
        <label for="gunID"></label>
        <input type="text" name="gunID" class="gunID">
      </td>`;
       
    }

    const objectifyTableData = ()=>{
        let table = document.getElementById('playerTable');
        
    }
    
    
    

</script>
<h1> This is Laser Tag</h1>

<table id="playerTable">
    <tr>
      <th>Player Tag:</th>
      <th>Game Id:</th>
      <th>Gun Id:</th>
    </tr>
    <tr class="player">
      <td>
        <label for="playerTag"></label>
        <input type="text" name="playerTag" class="playerTag" value = "player tag ...">
      </td>
      <td>
        <label for="gameID"></label>
        <input type="text" name="gameID" class="gameID">
      </td>
     
      <td>
        <label for="gunID"></label>
        <input type="text" name="gunID" class="gunID">
      </td>
    </tr>
    
    
  </table>
  <button type="button" on:click|preventDefault={addPlayer}>Add Player +</button>
<style>
    
    h1{
        font-size: 1.5em;
        color: var(--hellWhite);
    }
    table{
        color: var(--hellWhite);
        
    }
</style>