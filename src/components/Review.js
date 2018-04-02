import React, { Component } from 'react';
import { Image,View,ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Form, Item, Label, Input, List} from 'native-base';

export default class Review extends Component {
    static navigationOptions = {
      title: 'Review',
    };

    constructor(props){
      super(props);
      this.state = {isLoading:true}
    }

    componentDidMount()
    {
      const {params} = this.props.navigation.state;
      const id = params ? params.id : null;
      return fetch('https://3606595c.ap.ngrok.io/api/v1/reviews/'+id)
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
            <List dataArray={this.state.dataSource} renderRow={(item) =>
              <Card>
                <CardItem header>
                  <Text>{item.name}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      {item.message}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Left>
                    {
                        this.numberToArray(item.rate).map(function(x,y){
                          return <Icon active name="star" style={{color:'#EFAD57'}} key={x}/>
                        })
                    }                                  
                  </Left>  
                </CardItem>
              </Card>
            }>
            </List>
          </Content>
        </Container>
      );
    }
  }
  