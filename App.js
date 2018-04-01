import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Form, Item, Label, Input} from 'native-base';
import { StackNavigator} from 'react-navigation';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://via.placeholder.com/350x150'}} />
                <Body>
                  <Text>Titik Singgah</Text>
                  <Text note>Jl. Ki Hajar Dewantara 15A, Metro Timur, Kota Metro</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://via.placeholder.com/350x150'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="star" />
                <Icon active name="star" />
                <Icon name="star" />                                 
              </Left>
              <Body>
                <Button transparent onPress={()=>this.props.navigation.navigate('Review')}>
                  <Icon active name="chatbubbles" />
                  <Text>4 Review</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.props.navigation.navigate('Detail')}>
                <Text>Detail</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

class DetailScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://via.placeholder.com/350x150'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://via.placeholder.com/350x150'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

class ReviewScreen extends Component {
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
            <Button block primary>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen },
    Review: { screen: ReviewScreen }
  },
  {
    initialRouteName : 'Home',
  }
);

export default class App extends Component{
  render(){
    return <RootStack/>;
  }
}