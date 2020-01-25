import React from 'react';
import {
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    Container,
    Footer,
    FooterTab,
    Text
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import News from '../News/News'
import Shop from '../Shop/Shop'
import Profile from '../Profile/Profile'

export class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: "Shop",
        }
    }

    render() {
        var display_data = null;
        if (this.state.page == 'News') {
            display_data = <News navigation={this.props.navigation} />
        }else if(this.state.page == 'Profile') {
            display_data = <Profile navigation={this.props.navigation} />
        }else{
            display_data = <Shop navigation={this.props.navigation} />
        }

        return (
            <View style={{ height: '100%', }}>
                <StatusBar hidden={true} />
                <Container>
                    {display_data}
                </Container>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#fea5ad', justifyContent: "center" }}>
                        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", }}
                            onPress={() => { this.setState({ page: 'News' }) }}
                        >
                            <Icon name="earth" size={24} style={{ color: this.state.page == 'News' ? '#f3dfe3' : '#ec7373', }}/>
                            <Text style={[ styles.text_font, { color: this.state.page == 'News' ? '#f3dfe3' : '#ec7373', } ]}>News</Text>
                        </TouchableOpacity>
                    </FooterTab>
                    <FooterTab style={{ backgroundColor: '#fea5ad', justifyContent: "center" }}>
                        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", }}
                            onPress={() => { this.setState({ page: 'Shop' }) }}
                        >
                            <Icon name="store" size={24} style={{ color: this.state.page == 'Shop' ? '#f3dfe3' : '#ec7373', }}/>
                            <Text style={[ styles.text_font, { color: this.state.page == 'Shop' ? '#f3dfe3' : '#ec7373', } ]}>Shop</Text>
                        </TouchableOpacity>
                    </FooterTab>
                    <FooterTab style={{ backgroundColor: '#fea5ad', justifyContent: "center" }}>
                        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", }}
                            onPress={() => { this.setState({ page: 'Profile' }) }}
                        >
                            <Icon name="account" size={24} style={{ color: this.state.page == 'Profile' ? '#f3dfe3' : '#ec7373', }}/>
                            <Text style={[ styles.text_font, { color: this.state.page == 'Profile' ? '#f3dfe3' : '#ec7373', } ]}>Profile</Text>
                        </TouchableOpacity>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text_font:{
        fontSize: 15,
    },
});