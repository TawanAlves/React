import { useState } from 'react';
import { Item, Container, Board, Input, Button, List } from './styles.js';

function App(){

         const [ tasks, setTasks ] = useState( ['Comprar pão', 'Lavar meias'] ); //Array com o default 
         const [ inputValue, setInputValue] = useState( '' );

      function inputChange(event){
         setInputValue (event.target.value) ;
      }
      function buttonClick(){
         setTasks ([...tasks, inputValue]) //mudança do array deafault
      }

   return (
      <Container>
         <Board>

            <Input type="text" placeholder="Digite a sua tarefa" onChange ={inputChange} />
            <Button onClick={buttonClick}> Adicionar Tarefas </Button>
            <List>
              {
               tasks.map( (item, index ) => (
                  <Item key = {index} >
                     {item}
                  </Item>
               ))
              }
            </List>
            
         </Board>
      </Container>
   )

}

export default App