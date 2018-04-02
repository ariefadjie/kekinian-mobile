import React, { Component } from 'react';
import { Image,View,ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right} from 'native-base';

export default class Detail extends Component {
    static navigationOptions = {
      title: 'Detail',
    };

    constructor(props){
      super(props);
      this.state = {isLoading:true}
    }

    componentDidMount()
    {
      const {params} = this.props.navigation.state;
      const id = params ? params.id : null;
      return fetch('https://3606595c.ap.ngrok.io/api/v1/places/'+id)
        .then((response)=>response.json())
        .then((responseJson)=>{
          this.setState({
            isLoading:false,
            dataSource: responseJson
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

      const item = this.state.dataSource;

      return (
        <Container>
          <Content>
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: item.img_profile}} />
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>{item.location}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: item.img_cover}} style={{height: 200, width: '100%', flex: 1}}/>
                  <Text>{item.description}</Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
    }
  }