import React from "react";
import { inject, observer } from "mobx-react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { EmployeeList } from "./EmployeeModal.modal";
import { observable } from "mobx";

type Props = {
    route?: any
    navigation: any
}

@observer
export default class EmployeeDetailsComponent extends React.Component<Props> {

    @observable getEmployeeDetails: EmployeeList = null
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        this.getEmployeeDetails = this.props.route && this.props.route.params && this.props.route.params.itemDet
        this.setState({})
    }

    render() {
        return (
            <View>
                {this.getEmployeeDetails && <ScrollView scrollEnabled={true}><View style={{ width: '100%' }}>
                    <View style={{ backgroundColor: '#4D4D4D' }}>
                        <View style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: '10%', height: 210 }}>
                            <Image style={{ width: Dimensions.get('screen').width, height: 200, borderRadius: 50 }} resizeMode={'contain'} source={{ uri: this.getEmployeeDetails.profile_image }} />
                        </View>
                        <View style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 15, marginBottom: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> {this.getEmployeeDetails.name} </Text>
                        </View>
                    </View>
                    <View style={{marginTop: '4%', padding: 10}}>
                        <View>
                            <Text style={{ color: '#AB7CC9', fontSize: 15, marginBottom: 5, fontWeight: 'bold' }}> User Name </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 17 }}> {this.getEmployeeDetails.username} </Text>
                        </View>
                    </View>
                    <View style={{marginTop: '0%', padding: 10}}>
                        <View>
                            <Text style={{ color: '#AB7CC9', fontSize: 15, marginBottom: 5, fontWeight: 'bold' }}> Email Address </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 17}}> {this.getEmployeeDetails.email} </Text>
                        </View>
                    </View>
                    <View style={{marginTop: '0%', padding: 10}}>
                        <View>
                            <Text style={{ color: '#AB7CC9', fontSize: 15, marginBottom: 5, fontWeight: 'bold' }}> Address </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 17}}> {this.getEmployeeDetails.address.suite} , {this.getEmployeeDetails.address.street} , {this.getEmployeeDetails.address.city}
                                {this.getEmployeeDetails.address.zipcode}
                             </Text>
                        </View>
                    </View>
                    <View style={{marginTop: '0%', padding: 10}}>
                        <View>
                            <Text style={{ color: '#AB7CC9', fontSize: 15, marginBottom: 5, fontWeight: 'bold' }}> Phone </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 17}}> {this.getEmployeeDetails.phone} </Text>
                        </View>
                    </View>
                    <View style={{marginTop: '0%', padding: 10}}>
                        <View>
                            <Text style={{ color: '#AB7CC9', fontSize: 15, marginBottom: 5, fontWeight: 'bold' }}> Website </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 17}}> {this.getEmployeeDetails.website ? this.getEmployeeDetails.website : '-'} </Text>
                        </View>
                    </View>
                    <View style={{marginTop: '0%', padding: 10, marginBottom: '5%'}}>
                        <View>
                            <Text style={{ color: '#AB7CC9', fontSize: 15, marginBottom: 5, fontWeight: 'bold' }}> Company Details </Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <View>
                                <Text style={{ color: 'black', fontSize: 17}}> {this.getEmployeeDetails.company?.name} , </Text>
                            </View>
                            <View>
                                <Text style={{ color: 'black', fontSize: 17}}> {this.getEmployeeDetails.company?.catchPhrase} , </Text>
                            </View>
                            <View>
                                <Text style={{ color: 'black', fontSize: 17, paddingBottom: 10}}> {this.getEmployeeDetails.company?.bs} </Text>
                            </View>
                            
                        </View>
                    </View>
                    

                </View></ScrollView>}
            </View>
        )
    }

}