import React, { useState } from 'react'
import { ScrollView, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import styles from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCogs, faToolbox, faKey, faFan, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import Menu from "../menu/index"

const CarItem = () => {
    
    const[locked, setLocked] = useState(true);
    const clickLock = () => {
        if(locked){
            setLocked(false);
        }
        else{
            setLocked(true);
        }
    }
    return(
        <View style={styles.carContainer}>
            <ImageBackground source={require("../../assets/subaru_evoltis_app_background.png")} style={styles.backgroundImage} />
            {/* Header */}
            <View style={styles.headers}>
                <TouchableOpacity>
                   <FontAwesomeIcon style={styles.icon} icon={ faCogs } size={28}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Fresh Juice Studios</Text>
                <TouchableOpacity>                
                    <FontAwesomeIcon style={styles.icon} icon={ faToolbox } size={28}/>
                </TouchableOpacity>
            </View>
            {/* Mileage */}
            <View style={styles.batterySection}>
                <Image source={require("../../assets/battery_icon.png")} style={styles.batteryImage} /> 
                <Text style={styles.batteryText}>165 mi.</Text>
            </View>
            {/*Status*/}
            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
            </View>
            {/*Control Icon*/}
            <View style={styles.controls}>
                <TouchableOpacity>
                    <View style={styles.controlButton}>
                        <FontAwesomeIcon style={styles.icon} icon= { faKey } size={24}></FontAwesomeIcon>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.controlButton}>
                        <FontAwesomeIcon style={styles.icon} icon= { faFan } size={24}></FontAwesomeIcon>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {clickLock}>
                    <View style={styles.controlButton}>
                        <FontAwesomeIcon style={styles.icon} icon= {locked ? faLock: faUnlockAlt} size={24}></FontAwesomeIcon>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {/*Menu*/}
                <Menu />
            </ScrollView>

            
        </View>   
    )
};

export default CarItem;
