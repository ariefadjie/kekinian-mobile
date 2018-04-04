import React, { Component } from 'react';
import { Image,View,ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Form, Item, Label, Input, List, Picker} from 'native-base';
import axios from 'axios';

export default class Review extends Component {
    static navigationOptions = {
      title: 'Review',
    };

    constructor(props){
      super(props);
      this.state = {
        isLoading:true,
        name: '',
        message: '',
        rate:0,
        btnSubmitDisabled:false,
      }
    }

    componentDidMount()
    {
      const {params} = this.props.navigation.state;
      const id = params ? params.id : null;
      return axios.get('https://kekinian.ariefadjie.com/api/v1/reviews/'+id)
      .then(res => {
        this.setState({
          isLoading:false,
          dataSource: res.data
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

    onValueChange(value)
    {
      this.setState({
        rate: value
      });
    }

    handleSubmit()
    {
      this.setState({
        btnSubmitDisabled:true,
      });
      const {params} = this.props.navigation.state;
      const id = params ? params.id : null;
      const review = {
        name : this.state.name,
        message : this.state.message,
        rate : this.state.rate
      }
      return axios.post('https://kekinian.ariefadjie.com/api/v1/reviews/'+id,review)
      .then(res => {
        var dataSource = this.state.dataSource.slice();
        dataSource.unshift(res.data.data);
        this.setState({
          name:'',
          message:'',
          rate:0,
          btnSubmitDisabled:false,
          dataSource:dataSource,
        });
        alert(res.data.message);
      })
      .catch(res => {
        this.setState({
          btnSubmitDisabled:false,
        });
        var errors = res.response.data.errors;
        alert(JSON.stringify(errors));
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
      let btnSubmitDisabled = this.state.btnSubmitDisabled;
      return (
        <Container>
          <Content>
            <Form>
            <Card>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Label>Name</Label>
                    <Input 
                      onChangeText={(name)=>this.setState({name})}
                      value={this.state.name}
                    />
                  </Item>
                  <Item floatingLabel>
                    <Label>Message</Label>
                    <Input 
                      onChangeText={(message)=>this.setState({message})}
                      value={this.state.message}
                    />
                  </Item>
                  <Item>
                    <Label>Rate</Label>
                    <Picker
                      mode="dropdown"
                      placeholder="Rate"
                      selectedValue={this.state.rate}
                      onValueChange={this.onValueChange.bind(this)}
                      style={{width:'88%'}} 
                    >
                      <Picker.Item label="Please Select" value="0" />
                      <Picker.Item label="1 Star" value="1" />
                      <Picker.Item label="2 Star" value="2" />
                      <Picker.Item label="3 Star" value="3" />
                    </Picker>
                  </Item>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Button disabled={btnSubmitDisabled} rounded block success onPress={this.handleSubmit.bind(this)}>
                    <Text>Submit</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
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
  