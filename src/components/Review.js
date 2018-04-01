import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Form, Item, Label, Input} from 'native-base';

export default class Review extends Component {
    render() {
      return (
        <Container>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Name</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Message</Label>
                <Input />
              </Item>
              <Button rounded block primary>
                <Text>Submit</Text>
              </Button>
            </Form>
            <Card>
              <CardItem header>
                <Text>Arief Adjie</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Tempatnya bagus, hanya kalo hujan ya kehujanan
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Left>
                  <Icon active name="star" />
                  <Icon active name="star" />
                  <Icon name="star" />    
                </Left>  
              </CardItem>
           </Card>
           <Card>
              <CardItem header>
                <Text>Ismy Amnes</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Suka sekali, ada pancake durian.
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Left>
                  <Icon active name="star" />
                  <Icon active name="star" />
                  <Icon active name="star" />  
                </Left>  
              </CardItem>
           </Card>
          </Content>
        </Container>
      );
    }
  }
  