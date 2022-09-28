import Card from './Card';
import { listCards } from './listCards';
import './styles.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useState } from 'react';


function CardsContainer() {

  const [lista_tec, updateCharacters] = useState(listCards);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(lista_tec);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="techs">
      <h2 className="section-title">Tecnologias <a className='clique'>(Clique e arraste)</a> </h2>
      <main className="cards-container">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction="horizontal" id="ordena">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {lista_tec.map(({ id, alt, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Card key={id} image={thumb} alt={alt} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}/>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </main>
    </div>
  )
}

export default CardsContainer;