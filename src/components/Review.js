import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Form, Item, Label, Input} from 'native-base';

export default class Review extends Component {
    static navigationOptions = {
      title: 'Review',
    };

    render() {
      return (
        <Container>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Name</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Message</Label>
                <Input />
              </Item>
              <Item>
              <Button bordered rounded block success>
                <Text>Submit</Text>
              </Button>
              </Item>
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
                  <Icon active name="star" style={{color:'#EFAD57'}}/>                                 
                  <Icon active name="star" style={{color:'#EFAD57'}}/>                                    
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
                  <Icon active name="star" style={{color:'#EFAD57'}}/>                                 
                  <Icon active name="star" style={{color:'#EFAD57'}}/>                                 
                  <Icon active name="star" style={{color:'#EFAD57'}}/>                                 
                </Left>  
              </CardItem>
           </Card>
          </Content>
        </Container>
      );
    }
  }
  