import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web';
//import Brain-Tumor-Overview from '../../assets/images/Brain_Tumor_Overview.jpg'

export default function Explore() {
  return (
    <View>
      <ScrollView style={styles.scrollContainer}>

        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#4CAF50', // Green color for heading
          marginBottom: 10
        }}>
          Understanding Brain Tumors: Types, Precautions, and Cures
        </Text>
        <Image source='../../assets/images/Brain-Tumor-Overview.jpg' style={styles.uploadedImage} />
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#4CAF50', // Green color for heading
          marginBottom: 5
        }}>
          Introduction
        </Text>

        <Text>
          Brain tumors are abnormal growths of cells within the brain or surrounding structures. They can be benign (non-cancerous) or malignant (cancerous) and can arise from the brain tissue itself or from other parts of the body. The complexity of brain tumors necessitates a comprehensive understanding of their types, potential precautions, and available treatment options. </Text>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#4CAF50', // Green color for heading
            marginBottom: 5
          }}>Types of Brain Tumors </Text>

          <Text>Brain tumors can be classified into several categories based on their origin and characteristics. Here are some of the most common types:</Text>

       
        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>
          1. Gliomas:
        </Text>
        <Text>
          Gliomas arise from glial cells, which support and protect neurons in the brain. They are further divided into subtypes:
          - Astrocytomas: These tumors originate from astrocytes, star-shaped glial cells. They can range from low-grade (slow-growing) to high-grade (fast-growing and aggressive).
          - Oligodendrogliomas: These tumors develop from oligodendrocytes, which produce myelin (the protective sheath around nerves). They tend to grow more slowly than astrocytomas and often have better treatment outcomes.
          - Ependymomas: These tumors form from ependymal cells, which line the ventricles of the brain and the central canal of the spinal cord. They can occur at any age and can be challenging to treat due to their location.
        </Text>


        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>2. Meningiomas: </Text>
        <Text> Meningiomas arise from the meninges, the protective membranes surrounding the brain and spinal cord. They are typically benign and slow-growing but can cause problems due to their location and pressure on brain structures.</Text>


        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>3. Medulloblastomas: </Text>
        <Text> These are primitive neuroectodermal tumors that primarily affect children. They are fast-growing and typically found in the cerebellum, impacting balance and coordination.</Text>

        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>4. Pituitary Tumors:</Text>
        <Text> These tumors develop in the pituitary gland, which regulates hormones. They can affect hormonal balance and cause a variety of symptoms, including headaches and vision problems.</Text>

        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>5. Schwannomas:</Text>
        <Text> Schwannomas arise from Schwann cells, which produce the myelin sheath surrounding peripheral nerves. The most common type is vestibular schwannoma (acoustic neuroma), affecting hearing and balance.</Text>

        <Text style={{
          fontSize: 24,
          color: '#4CAF50', // Deep green color for points
          marginBottom: 5
        }}>Precautions Against Brain Tumors</Text>

        <Text>While the exact cause of brain tumors is often unknown, several precautions can help reduce the risk:</Text>

        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>1. Healthy Lifestyle Choices:</Text>
        <Text> - Diet: Consuming a balanced diet rich in fruits, vegetables, whole grains, and lean proteins can support overall health.</Text>
        <Text> - Exercise: Regular physical activity helps maintain a healthy weight and reduces the risk of several cancers.</Text>

        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>2. Avoiding Exposure to Harmful Substances:</Text>
        <Text> - Radiation: Minimize exposure to ionizing radiation when possible, particularly during medical imaging.</Text>
        <Text> - Chemicals: Reduce exposure to harmful chemicals and toxins in the environment, such as pesticides and industrial solvents.</Text>

        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>3. Regular Check-Ups:</Text>
        <Text> - Stay proactive about health check-ups and discuss any neurological symptoms with a healthcare provider promptly.</Text>


        <Text style={{
          fontSize: 24,
          color: '#4CAF50', // Deep green color for points
          marginBottom: 5
        }}>Cure and Treatment Options</Text>

        <Text>The treatment of brain tumors depends on various factors, including the tumor type, location, size, and the patient's overall health. Common treatment options include:</Text>

        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>1. Surgery:</Text>
        <Text>  - The primary treatment for many brain tumors is surgical removal. The goal is to excise as much of the tumor as possible while preserving surrounding healthy tissue.</Text>

        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>2. Radiation Therapy:</Text>
        <Text> - This treatment uses high-energy radiation to kill tumor cells or shrink tumors. It is often used after surgery to target remaining cells or for tumors that cannot be surgically removed.</Text>

        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>3. Chemotherapy:</Text>
        <Text> - Chemotherapy involves using drugs to kill rapidly dividing cells, including cancerous ones. It may be used alone or in conjunction with surgery and radiation.</Text>

        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>4. Targeted Therapy:</Text>
        <Text> - Targeted therapies focus on specific molecular targets associated with tumor growth and progression, providing a more personalized approach to treatment.</Text>

        <Text style={{
          fontSize: 18,
          color: '#FF5722', // Deep orange color for points
          marginBottom: 5
        }}>5. Immunotherapy: </Text> <Text>
          - This emerging treatment uses the body's immune system to fight cancer. It can be particularly effective for certain types of brain tumors.</Text>

        <Text style={{
          fontSize: 24,
          color: '#4CAF50', // Deep green color for points
          marginBottom: 5
        }}>Conclusion</Text>

        <Text>Brain tumors represent a significant health challenge, but advancements in medical research and technology have improved the diagnosis, treatment, and outcomes for patients. Understanding the types of brain tumors, taking precautionary measures, and exploring available treatment options can empower individuals to take proactive steps in managing their health. Regular communication with healthcare providers and awareness of symptoms are essential for early detection and intervention, leading to better prognoses and improved quality of life.</Text>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F0F0',
    paddingBottom: 50
  },
  
  scrollContainer: {
    width: '100%', // Full width of the screen
    maxHeight: 1000, // Set a max height to enable scrolling
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  boldLargeText: {
    fontSize: 24, // Change this value for larger or smaller text
    //fontWeight: 'bold', // This makes the text bold
  },
    
    
   
    uploadedImage: {
      width: 400, // Adjust width as needed
      height: 300, // Adjust height as needed
      marginVertical: 10,
      borderRadius: 5,
    },
    
});