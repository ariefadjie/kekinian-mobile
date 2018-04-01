import React, { Component } from 'react';
import { Image,View,Activity,ActivityIndicator,FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List} from 'native-base';

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {isLoading:true}
    }

    componentDidMount()
    {
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response)=>response.json())
        .then((responseJson)=>{
          this.setState({
            isLoading:false,
            dataSource: responseJson.movies
          },function(){
          
          })
        })
        .catch((error)=>{
          console.error(error);
        });
    }

    render() {
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }

      return (
        <Container>
          <Content>
            <List dataArray={this.state.dataSource} renderRow={(item) =>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'http://via.placeholder.com/350x150'}} />
                    <Body>
                      <Text>{item.title}</Text>
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
            }>
            </List>
          </Content>
        </Container>
      );
    }
  }

  export default Home;