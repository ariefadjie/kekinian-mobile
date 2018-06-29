import React, { Component } from 'react';
import { Image,View,ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right} from 'native-base';
import axios from 'axios';

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
      return axios.get('https://kekinian.ariefadjie.com/api/v1/places/'+id)
      .then(res => {
        this.setState({
          isLoading:false,
          detail: res.data
        });
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

      const item = this.state.detail;

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