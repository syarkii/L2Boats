import React from 'react';
import {ScrollView, Text} from 'react-native';
import Boats from './Boats';

const AllBoats =() => {
    return (
        <ScrollView>
          <Text style={{fontWeight:'bold',textAlign:'center', fontSize:20, color:'black', marginBottom:10, marginTop:10, backgroundColor:'grey', borderWidth:1, borderColor:'black', width:'80%', alignSelf: 'center'}}>
            GetABoat - For Sale
          </Text>
          <Text>
            <Boats icon_name="sailboat"
                   title="Sea Ray 500 Sundancer"
                   description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                   poster={require('../img/sea_ray.jpg')}/>
            <Boats icon_name="bomb"
                   title="Four Winns Horizon 180"
                   description="A sporty look and refined details truly set the Horizon 180 above all others."
                   poster={require('../img/four_winns.jpg')} />

            <Boats icon_name="bomb"
                   title="Flipper 640 ST"
                   description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                   poster={require('../img/flipper.jpg')} />

            <Boats icon_name="bomb"
                   title="Princess V48"
                   description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                   poster={require('../img/princess.jpg')} />

            <Boats icon_name="bomb"
                   title="Bayliner 175 Bowrider"
                   description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                   poster={require('../img/bayliner.jpg')} />

            <Boats icon_name="bomb"
                   title="Fairline Targa 47"
                   description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                   poster={require('../img/fairline.jpg')} />
          </Text>
        </ScrollView>
    );
};

export default AllBoats;
