import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right} from 'native-base';

class Home extends Component {
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
                    <Text>2 Review</Text>
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

  export default Home;