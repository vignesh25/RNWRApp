import { observer } from "mobx-react";
import { observable } from "mobx"
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
    itemList: any
    goToEmpDet: Function
}

@observer
export default class EmployeeFlatList extends React.Component<Props> {

    constructor(props: any) {
        super(props)
    }

    renderItem = (item: any) => {
        return <TouchableOpacity onPress={() => this.props.goToEmpDet(item.item)}>
            <View style={{ backgroundColor: '#ffffff' }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#ffffff', padding: 10, width: '100%', borderBottomWidth: 1, borderBottomColor: '#CCC' }}>
                    <View style={{ width: '20%', borderRadius: 50, justifyContent: 'center' }}>
                        <Image style={{ width: 90, height: 90, borderRadius: 50 }} resizeMode={'cover'} source={{ uri: item.item.profile_image }} />
                    </View>
                    <View style={{ width: '65%', padding: 10, margin: 10, flexDirection: 'column' }}>
                        <View>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginBottom: 3 }}>
                                {item.item.name}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', paddingRight: 6 }}>
                                <Icon size={13} color="#C71585" name={'envelope'} />
                            </View>
                            <View>
                                <Text style={{ color: 'black', marginBottom: 3 }}>
                                    {item.item.email}
                                </Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', paddingRight: 6 }}>
                                <Icon size={13} color="#C71585" name={'phone'} />
                            </View>
                            <View>
                                <Text style={{ color: 'black', marginBottom: 3 }}>
                                    {item.item.phone ? item.item.phone : '-'}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '15%', marginRight: 100, justifyContent: 'center' }}>
                        <Icon size={15} color="#C71585" name={'chevron-right'} />
                    </View>

                </View>

            </View>
        </TouchableOpacity>
    }

    keyExtractor = (item: any) => item.id;

    render() {
        return <SafeAreaView>
            <FlatList
                extraData={this.props}
                data={this.props.itemList}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                maxToRenderPerBatch={100}
                initialNumToRender={100}
                onEndReachedThreshold={0.1}
            />
        </SafeAreaView>
    }

}