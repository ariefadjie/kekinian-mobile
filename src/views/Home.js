import React, { Component } from 'react';
import { Image,View,Activity,ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List} from 'native-base';
import axios from 'axios';

class Home extends Component {
    static navigationOptions = {
      title: 'Kekinian Place',
    };

    constructor(props){
      super(props);
      this.state = {isLoading:true}
    }

    componentDidMount()
    {
      return axios.get('https://kekinian.ariefadjie.com/api/v1/places')
      .then(res => {
        this.setState({
          isLoading:false,
          places: res.data
        });
      })
      .catch((error)=>{
        console.error(error);
      });
    }

    numberToArray(number)
    {
      var star = [];
      for(let i = 0; i < number; i++)
      {
        star[i] = null;
      }
      return star;
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
            <List dataArray={this.state.places} renderRow={(item) =>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: item.img_profile}} />
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{item.location}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: item.img_cover}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    {
                        this.numberToArray(item.rate).map(function(x,y){
                          return <Icon active name="star" style={{color:'#EFAD57'}} key={x}/>
                        })
                    }                                  
                  </Left>
                  <Body>
                    <Button transparent success onPress={()=>this.props.navigation.navigate('Review',{id:item.id})}>
                      <Icon name="chatbubbles" />
                      <Text>{item.review} Review</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Button bordered rounded warning onPress={()=>this.props.navigation.navigate('Detail',{id:item.id})}>
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