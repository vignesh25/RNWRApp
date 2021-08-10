import React from "react";
import { inject, observer } from "mobx-react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import EmployeeFlatList from "./EmployeeFlatList";
import { EmployeeList } from "./EmployeeModal.modal";
import { observable } from "mobx";

type Props = {
    route?: any
    navigation: any
}

@observer
export default class EmployeeListComponent extends React.Component<Props> {
    @observable getEmployeeData: EmployeeList[] = []
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        fetch('http://www.mocky.io/v2/5d565297300000680030a986', {
            method: 'GET'
         })
         .then((response) => response.json())
         .then((responseJson) => {
            this.getEmployeeData = responseJson
            this.setState({})
         })
         .catch((error) => {
            console.error(error);
         });
    }

    // Go to employee details
    goToEmpDetails(data: any) {
        this.props.navigation.navigate('EmployeeDetailsComponent', {
            itemDet: data
        })
    }

    render() {
        return (
            <SafeAreaProvider>
                <View>
                    {this.getEmployeeData && this.getEmployeeData.length > 0 && 
                        <EmployeeFlatList 
                                        itemList={this.getEmployeeData}
                                        goToEmpDet={this.goToEmpDetails.bind(this)} />}
                    {this.getEmployeeData.length == 0 && <View>
                        <Text> NO REc </Text>
                        </View>}
                </View>
            </SafeAreaProvider>

        )
    }

}