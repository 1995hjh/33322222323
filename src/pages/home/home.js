import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { Loading } from '../../components'
import './home.css'

export default class Home extends Component {

  config = {
    navigationBarTitleText: '网易严选'
  }

  state = {
      loaded: false
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    
    if (!this.state.loaded) {
        return <Loading />
    }
    return (
      <View className='index'>
        <Text>Hello2 world!</Text>
        <Button>详情页</Button>
      </View>
    )
  }
}

