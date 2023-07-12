import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {PiCube} from 'react-icons/pi'

const Page = () => {
  return (
    <Box w={'100%'}>
      <Flex w={'98%'}  border={'1px solid #8C8E8E'} m={'auto'} mt={'10px'} justifyContent={'center'}>
        
        {/* Left box */}
        <Box bgColor={'#CFE2F3'} h={'100vh'} w={'5%'}>
        <Flex justifyContent={'center'} mt={'7px'} mb={'20px'}>
        <Image   h={'45px'} w={'55px'} src='https://github.com/Sarikagupta14/Mini-Project/assets/121433831/3b88c857-d17e-48d8-bf2f-5fe59b97350f'/>
        </Flex>
           
              <Flex  direction={'column'} m={'auto'} gap={'15px'}>
                <Image alignSelf={'center'} color={'#838383'} fontSize={'2.5rem'} src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"/> 
                <Image alignSelf={'center'} color={'#838383'} fontSize={'2.5rem'} src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"/> 
                <Image alignSelf={'center'} color={'#838383'} fontSize={'2.5rem'} src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"/> 
                <Image alignSelf={'center'} color={'#838383'} fontSize={'2.5rem'} src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"/> 
                <Image alignSelf={'center'} color={'#838383'} fontSize={'2.5rem'} src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"/> 
                <Image alignSelf={'center'} color={'#838383'} fontSize={'2.5rem'} src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"/> 
            </Flex>


                <Flex justifyContent={'center'} m={'auto'} mt={'250px'} color={'black'} h={'50px'} w={'50px'} borderRadius={'full'} bgColor={'#B5A6D4'} fontWeight={'600'} fontSize={'1.2rem'}>
                   <Text  mt={'7px'}> DK</Text>
                </Flex>
                
            

          


        </Box>

        {/* Right box */}
        {/* section-1 */}
        <Box w={'95%'} >
          <Flex justifyContent={'space-between'} m={'auto'} h={'50px'} align={'center'} w={'95%'}>
            <Text   color={'#120409'} fontSize={'1.7rem'} fontWeight={'700'}>Hi,Jennie Moss</Text>
             <Text  color={'#8C8E8E'}>Last scanned on March 20th,2023 11:30PM IST</Text>
          </Flex>
           
           {/* section-2 */}
          
          <Flex justifyContent={'space-evenly'} w={'90%'} m={'auto'} align={'center'}>
           
            <Box borderRadius={'10px'} m={'auto'} mt={'10px'} p={'20px'} w={'20%'} h={'100px'} border={'2px solid #767E82'} >
                <Text align={'center'} color={'#1F2118'} fontWeight={'700'} fontSize={'1.5rem'}>$400,000</Text>
                <Text align={'center'}  color={'#1F2118'} fontWeight={'500'} fontSize={'1.2rem'}>Total budget you own</Text>
            </Box>
            <Box borderRadius={'10px'} m={'auto'} p={'20px'} bgColor={'#CFE2F3'} w={'20%'} border={'2px solid #767E82'}>
                <Text  align={'center'}  fontWeight={'700'} fontSize={'1.5rem'} color={'#1F2118'}>$299,762</Text>
                <Text  align={'center'}  color={'#1F2118'} fontWeight={'500'} fontSize={'1.2rem'}>Spent month-to-date</Text>
            </Box>
            <Box borderRadius={'10px'} m={'auto'} p={'20px'} bgColor={'#D6EAD1'} w={'20%'} border={'2px solid #767E82'}>
                <Text align={'center'}  fontWeight={'700'} fontSize={'1.5rem'} color={'#1F2118'}>$2,874,582</Text>
                <Text align={'center'}  color={'#1F2118'} fontWeight={'500'} fontSize={'1.2rem'}>Forecasted till month</Text>
            </Box>

           </Flex>
            
            {/* Section-3 */}
            <Box>
              
            {/* First Box */}
              <Flex w={'90%'} direction={'column'} m={'auto'} mt={'15px'} gap={'12px'} border={'3px solid #828282'} padding={'15px'} borderRadius={'5px'}>
                <Text color={'#40484D'} fontWeight={'500'} fontSize={'1.2rem'}>Buckets you own</Text>
                
                <Box bg={'#828282'}  h={'2px'}></Box>

                <Flex w={'80%'}  justifyContent={'space-between'}>
                   <Text fontWeight={'500'} color={'#40484D'}>Name</Text>
                   <Text fontWeight={'500'} color={'#40484D'} ml={'25px'}>Budget</Text>
                   <Text fontWeight={'500'} color={'#40484D'}>Spend</Text>
                   <Text fontWeight={'500'} color={'#40484D'}>Forecast</Text>
                </Flex>

                <Box bg={'#828282'} h={'2px'}></Box>

                <Flex gap={'5px'} direction={'column'}>
                <Flex w={'80%'} justifyContent={'space-between'}>
                   <Text  fontWeight='600' color={'#8F9CB1'}>ACME Corp</Text>
                   <Text  color={'#40484D'}>$200,000</Text>
                   <Text  color={'#40484D'}>$173,762</Text>
                   <Text  color={'#40484D'}>$292,629</Text>
                </Flex>

                <Flex w={'80%'} justifyContent={'space-between'}>
                   <Text fontWeight={'600'} color={'#8F9CB1'}>Raman Inc</Text>
                   <Text color={'#40484D'}>$200,000</Text>
                   <Text color={'#40484D'}>$124,762</Text>
                   <Text color={'#40484D'}>$292,629</Text>
                </Flex>
                </Flex>


                </Flex>
                    
                    
            {/* Second Box */}
            <Flex w={'90%'} direction={'column'} m={'auto'} mt={'10px'} gap={'10px'} border={'3px solid #828282'} padding={'15px'} borderRadius={'5px'}>
                <Text color={'#40484D'} fontWeight={'500'} fontSize={'1.2rem'}>Approvals assigned to you</Text>
                <Box bg={'#828282'}  h={'2.0px'}></Box>
                <Flex w={'100%'} gap={'150px'}>
                   <Text fontWeight={'500'} color={'#40484D'}>Bucket Name</Text>
                   <Text fontWeight={'500'} color={'#40484D'}>Current Budget</Text>
                   <Text fontWeight={'500'} color={'#40484D'} >Requested Budget</Text>
                   <Text fontWeight={'500'} color={'#40484D'} ml={'-20px'}>Requested By</Text>
                </Flex>
                <Box bg={'#828282'} h={'2.0px'}></Box>
                <Flex justifyContent={'space-between'}>
                   <Text fontWeight='600' color={'#8F9CB1'}>ACME Corp</Text>
                   <Text color={'#40484D'} >$200,000</Text>
                   <Text color={'#40484D'}>$250,762</Text>
                   
                   <Text color={'#8F9CB1'} >Joe Hilfinger</Text>
                   <Flex gap={'10px'}>
                   <Button color={'#40484D'}  border={'3px solid #828282'}>Approve</Button>
                    <Button color={'#40484D'}  border={'3px solid #828282'}>Reject</Button>
                    </Flex>
                </Flex>

               
                </Flex>

            {/* Third Box */}
            <Flex w="90%" direction={'column'} m={'auto'} mt={'10px'} gap={'10px'} border={'3px solid #828282'} padding={'15px'} borderRadius={'5px'}>
                <Text color={'#40484D'} fontWeight={'500'} fontSize={'1.2rem'}>Buckets you are member of</Text>
                <Box bg={'#828282'}  h={'2.0px'}></Box>
                <Flex justifyContent={'space-between'} w={'80%'}>
                   <Text fontWeight={'500'} color={'#40484D'}>Name</Text>
                   <Text fontWeight={'500'} color={'#40484D'}>Budget</Text>
                   <Text fontWeight={'500'} color={'#40484D'}>Spend</Text>
                   <Text fontWeight={'500'} color={'#40484D'}>Forecast</Text>
                </Flex>
                <Box bg={'#828282'} h={'2.0px'}></Box>
                <Flex justifyContent={'space-between'} w={'80%'}>
                   <Text fontWeight='600' color={'#8F9CB1'}>Longate</Text>
                   <Text color={'#40484D'}>$200,000</Text>
                   <Text color={'#40484D'}>$173,762</Text>
                   <Text color={'#40484D'}>$205.049</Text>
                </Flex>
                </Flex>
                    


            </Box>

        </Box>

      </Flex>
    </Box>
  )
}

export default Page
