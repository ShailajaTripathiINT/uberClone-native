import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../Utils/Styles/styles';
import OrderItem from './OrderItem';
// import firebase from '../../Firebase';

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);
  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });
  
//another function
// const addOrderToFirebase = () =>{
//   const db = firebase.firestore();
//   db.collection('orders').add({
//     items:items,
//     restaurantName:restaurantName,
//     createdAt:firebase.firestore.FieldValue.serverTimestamp(),
//   });
//   setModalVisible(false);
// };

  // another component
  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}

            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>${totalUSD}</Text>
            </View>
            <View style={styles.checkoutView}>
              <TouchableOpacity style={styles.checkoutBtn}
              onPress={()=>
               
                addOrderToFirebase()
               
              }
    >
                <Text style={styles.checkoutText}>checkout</Text>
                <Text style={styles.checkoutPrice}>${total ?totalUSD:""}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.viewCartContainer}>
          <View style={styles.viewCartBox}>
            <TouchableOpacity
              style={styles.viewCartBtn}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.viewCartText}>View Cart </Text>
              <Text style={styles.viewCartPrice}>${totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  viewCartContainer: {
    flex: 1,
    alignItem: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    zindex: 999,
    justifyContent: 'center',
  },
  viewCartBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  viewCartBtn: {
    marginTop: 20,
    backgroundColor: Colors.primary700,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  viewCartText: {
    color: Colors.primary500,
    fontSize: 20,
    marginRight: 30,
  },
  viewCartPrice: {
    color: Colors.primary500,
    fontSize: 20,
  },

  //
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7',
  },
  modalCheckoutContainer: {
    backgroundColor: Colors.primary500,
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
  },
  //
  checkoutView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // repeated css(need to minimize)
  checkoutBtn: {
    marginTop: 20,
    backgroundColor: Colors.primary700,
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  checkoutText:{
color:"white",
fontSize:20,
  },
  checkoutPrice:{
    position:"absolute",
    right:55,
    color:Colors.primary500,
    fontSize:15,
    top:17,
  }
});
