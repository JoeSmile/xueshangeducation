import { Box, Image, Wrap, Card, Text, WrapItem } from '@chakra-ui/react';
import React from 'react';
type Card = {
  name: string,
  imgSrc: string,
  description: string
}

type ProjectWrapProps = {
  cards: Card[]
}

function ProjectWrap(props: ProjectWrapProps) {
  const { cards } = props;
  return (
    <Wrap>
      {
        cards.map((card) => {
          return (
            <WrapItem  key={card.name}>
               <Card justifyContent='center' width='260px'>
                <Text fontSize='18px' fontWeight='600'>{card.name}</Text>
                <Text fontSize='12px'>{card.description}</Text>
              </Card>
            </WrapItem>
             
          )
        })
      }
    </Wrap>
  );
}

export default ProjectWrap;
