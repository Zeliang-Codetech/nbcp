import React, {useState, useEffect, useMemo} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import COLORS from './../../styles/colors';
import {useNavigation} from '@react-navigation/core';

const AboutScreen = () => {
  const navigator = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 10,
      }}>
      {/* <Header showBackButton /> */}
      <View style={{paddingVertical: 10}}>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            MOTTO :‘Cleaner & Healthier Nagaland’
          </Text>

          <Text>
            The Nagaland Pollution Control Board is a statutory body constituted
            on 19th February, 1991 under the provision of Section 4 of the Water
            (Prevention & Control of Pollution) Act, 1974 with a view to
            protecting the environment and preventing and controlling pollution
            in the State of Nagaland.
          </Text>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            FUNCTIONS AND ACTIVITIES OF THE BOARD:
          </Text>
          <Text>
            The Section 17 of both the Water (Prevention and Control of
            Pollution) Act, 1974 and Air (Prevention and Control of Pollution)
            Act, 1981 have clearly spelt out the legally mandated
            responsibilities of the State Pollution Control Board as detailed
            below:
          </Text>
          <View style={{padding: 20, gap: 20}}>
            <Text>
              1. To plan comprehensive programme for the prevention, control or
              abatement of water and air pollution in the state and to secure
              the execution thereof;
            </Text>
            <Text>
              2. To advise the state Government on any matter concerning the
              prevention, control or abatement of water and air pollution;
            </Text>
            <Text>
              3. To collect and disseminate information relating to water and
              air pollution, and the prevention, control or abatement thereof;
            </Text>

            <Text>
              4. To encourage, conduct and participate in investigation and
              research relating to problems of water pollution and prevention,
              control or abatement of water pollution;
            </Text>

            <Text>
              5. To collaborate with the central board in organizing the
              training of persons engaged or to be engaged in programmes
              relating to prevention, control or abatement of water and air
              pollution and to organize mass education programmes relating
              thereof;
            </Text>

            <Text>
              6. To inspect sewage or trade effluent, works and plants for the
              treatment of sewage and trade effluents and to review plans,
              specifying or other data relating to plants set up for the
              treatment of water, works for the purification thereof and the
              system for the disposal of sewage or trade effluents or in
              connection with the grand of consent as required by the Water Act;
            </Text>

            <Text>
              7. To inspect at all reasonable times, any control equipment,
              Indus trail plant or manufacture process and to give, by order,
              such as persons as it may consider necessary to take steps for the
              prevention, control or abatement of air pollution in such areas;
            </Text>

            <Text>
              8. To lay down, in consultation with the Central Board and having
              regard to the standards for the quality of air laid down by the
              central board, standards for emission of air pollutants in the
              atmosphere from industrial plants and automobiles or for the
              discharge of any air pollutant into the atmosphere from any other
              source whatsoever not being a ship or an aircraft;
            </Text>
            <Text>
              9. To evolve economical and reliable methods of treatment of
              sewage and trade effluents having regard to the peculiar
              conditions of soils, climate and water resources of different
              regions and more specially the prevailing flow characteristics of
              water in streams and wells which render it impossible to attain
              even the minimum degree of dilution;
            </Text>
            <Text>
              10. To evolve methods of utilization of sewage and suitable trade
              effluents in agriculture;
            </Text>
            <Text>
              11. To evolve efficient methods of disposal of sewage and trade
              effluents on land, as are necessary on account of the predominant
              conditions of scant stream flows that do not provide for major
              part of the year the minimum degree of dilution;
            </Text>
            <Text>
              12. To lay down standards of treatment of sewage and trade
              effluents to be discharged in any particular stream by taking into
              account the minimum fair weather dilution available in that stream
              and the tolerance limits of pollution permissible in the water of
              the stream, after the discharge of such effluents;
            </Text>
            <Text>
              13. To make, vary or revoke any order for prevention, control or
              abatement of discharge of waste into streams or wells and
              requiring any person concerned to construct new system for the
              disposal of sewage and trade effluents or to modify, alter or
              extent any such existing system or to adopt such remedial measures
              as are necessary to prevent control or abate water pollution;
            </Text>
            <Text>
              14. To lay down effluent standards to be complied with by persons
              while causing discharge of sewage or sullage or both, and to lay
              down, modify or annul effluent standard for the sewage and trade
              effluents;
            </Text>
            <Text>
              15. To advice the State Government with respect to the suitability
              of any premises or location of any industry, which is likely to
              cause air pollution or likely to pollute a stream or well;
            </Text>
            <Text>
              16. To perform such other functions as may be prescribed or as
              may, from time to time, be entrusted to it by the Central Board or
              the State Government; and
            </Text>
            <Text>
              17. To do such other things and to perform such acts as it may
              think necessary for the proper discharge of its functions and
              generally for the purpose of carrying into effect the purpose of
              the Air Act.
            </Text>
          </View>
        </View>

        <View style={{paddingVertical: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            CONSTITUTION OF THE BOARD:
          </Text>
          <Text>
            The State Government nominates the members of Nagaland Pollution
            Control Board. The board originally constituted as per Section 4 of
            the Water (Prevention & Control of Pollution) Act, 1974 on 19th
            February, 1991, was reconstituted in 2003.
          </Text>

          <View>
            <View style={styles.container}>
              <View style={styles.row}>
                <Text style={[styles.cell, {width: '10%'}]}>1</Text>
                <Text style={[styles.cell, {width: '60%'}]}>
                  Shri. Rusovil John, IFS (Rsd) (RR 87)
                </Text>
                <Text style={[styles.cell, {width: '30%'}]}>Chairman</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.cell, {width: '10%'}]}>2</Text>
                <Text style={[styles.cell, {width: '60%'}]}>
                  Secretary Law & Justice, Department, Nagaland, Kohima
                </Text>
                <Text style={[styles.cell, {width: '30%'}]}>Member</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.cell, {width: '10%'}]}>3</Text>
                <Text style={[styles.cell, {width: '60%'}]}>
                  Director of Industries, Nagaland, Kohima
                </Text>
                <Text style={[styles.cell, {width: '30%'}]}>Member</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.cell, {width: '10%'}]}>4</Text>
                <Text style={[styles.cell, {width: '60%'}]}>
                  Director of Health Services, Nagaland, Kohima
                </Text>
                <Text style={[styles.cell, {width: '30%'}]}>Member</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.cell, {width: '10%'}]}>5</Text>
                <Text style={[styles.cell, {width: '60%'}]}>
                  Chief Engineer P.W.D. Nagaland, Kohima
                </Text>
                <Text style={[styles.cell, {width: '30%'}]}>Member</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.cell, {width: '10%'}]}>6</Text>
                <Text style={[styles.cell, {width: '60%'}]}>
                  Chief Engineer P.H.E.D., Nagaland, Kohima
                </Text>
                <Text style={[styles.cell, {width: '30%'}]}>Member</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.cell, {width: '10%'}]}>7</Text>
                <Text style={[styles.cell, {width: '60%'}]}>
                  Secretary, Indian Red Cross Society, Nagaland, Kohima
                </Text>
                <Text style={[styles.cell, {width: '30%'}]}>Member</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.cell, {width: '10%'}]}>8</Text>
                <Text style={[styles.cell, {width: '60%'}]}>
                  President, Naga Mother’s Association, Nagaland, Kohima
                </Text>
                <Text style={[styles.cell, {width: '30%'}]}>Member</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.cell, {width: '10%'}]}>9</Text>
                <Text style={[styles.cell, {width: '60%'}]}>
                  President, Chamber of Commerce, Nagaland, Kohima
                </Text>
                <Text style={[styles.cell, {width: '30%'}]}>Member</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.cell, {width: '10%'}]}>10</Text>
                <Text style={[styles.cell, {width: '60%'}]}>
                  President, Nagaland Baptist Church Council, Nagaland, Kohima
                </Text>
                <Text style={[styles.cell, {width: '30%'}]}>Member</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.cell, {width: '10%'}]}>11</Text>
                <Text style={[styles.cell, {width: '60%'}]}>
                  K. Hukato Chishi, IFS
                </Text>
                <Text style={[styles.cell, {width: '30%'}]}>
                  Member Secretary
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>LEGISLATION</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Laws</Text>
          <View>
            <Text>
              The Nagaland Pollution Control Board has been empowered with the
              provisions of the following Acts & Rules:-
            </Text>
            <View style={{gap: 20}}>
              <Text>
                1. The Air (Prevention & Control of Pollution) Act, 1981 The Air
                (Prevention & Control of Pollution) Rules, 1981
              </Text>
              <Text>
                2. The Water (Prevention & Control of Pollution) Act, 1974 The
                Water (Prevention & Control of Pollution) Rules, 1975
              </Text>
              <View>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  3. The Environment (Protection Act), 1986
                </Text>
                <Text style={{margin: 10}}>
                  1. The Environment Protection Rules, 1986 (2000)
                  {'\n\n'}2. The Environment Impact Assessment (EIA)
                  Notification, 1994
                  {'\n\n'}3. The Hazardous Waste (Management & Handling) Rules,
                  1989 and its Amendments
                  {'\n\n'}4. The Manufacture, Storage and Import of Hazardous
                  Chemical Rules, 1989 and its amendments
                  {'\n\n'}5. The Chemical Accidents (Emergency Planning,
                  Preparedness & Response) Rules, 1996
                  {'\n\n'}6. The Manufacture, Use, Import, Export and Storage of
                  Hazardous Micro-organism Genetically Engineered Organisms or
                  Cells Rules, 1989.
                  {'\n\n'}7. The Bio-medical Wastes (Management & Handling)
                  Rules, 1988, and its Amendments.
                  {'\n\n'}8. The Municipal Solid Wastes (Management & Handling)
                  Rules, 2000.
                  {'\n\n'}9. The Recycled Plastics Manufacture and Usage Rules,
                  1999 and its Amendments.
                  {'\n\n'}10. The Noise Pollution (Regulation & Control) Rules,
                  2000.
                  {'\n\n'}11. The Batteries (Management & Handling) Rules, 2001.
                  {'\n\n'}12. Ozone Depleting Substances (Regulation) Rules,
                  2000.
                  {'\n\n'}13. The Public Liability Insurance Act, 1991 as
                  amended.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  cell: {
    fontSize: 16,
    borderStartWidth: 1,
    padding: 10,
  },
});
export default AboutScreen;
