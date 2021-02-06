import React, { Component } from 'react';
import { Icon, Item } from 'semantic-ui-react';

export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

export interface School {
  id: number;
  name: string;
}

interface CharacterListProps {
  schools?: School[];
  characters: Character[];
}

class CharacterList extends Component<CharacterListProps> {
  render() {
    const { schools, characters } = this.props;

    return (
      <>
        <Item.Group>
          {characters.map((c, i) => (
            /* eslint-disable react/jsx-key */
            <Item key={i}>
              <Icon name="user circle" size="huge" />
              <Item.Content>
                <Item.Header>{c.name}</Item.Header>
                <Item.Meta>{c.age}歳</Item.Meta>
                <Item.Meta>
                  {c.height ? c.height : '???'}
                  cm
                </Item.Meta>
                <Item.Meta>{schools ? schools[i].name : '???'}</Item.Meta>
              </Item.Content>
            </Item>
            /* eslint-enable */
          ))}
        </Item.Group>
      </>
    );
  }
}

export default CharacterList;
