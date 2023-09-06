import { Divider, VStack, StackProps, HStack, Text, CardBody, Stack, Card, Box} from '@chakra-ui/react';
import Image from 'next/image';

const QRcodes = ['qrcode.jpg', 'little-program.jpg']

const QRCodeCard = () => {
  return  <Card boxShadow='none'>
  <CardBody bg='#0D0E67'>
    <VStack>
      <Image src='/qrcode.jpg' alt='qrcode' height={80} width={80}/>
      <Text color='gray.50'>公众号: 学man君</Text>
    </VStack>
  </CardBody>
</Card>
}

const Addresses = () =>{
  return <VStack width='380px' alignItems='flex-start'>
    <Box>
    公司地址: 北京市朝阳区华腾北塘商务大厦708
    </Box>
    <Box>
    联系邮箱: xueshangliuxue@163.com
    </Box>
    <Box>
    电话: 189-1195-1872
    </Box>
    <Box>
    服务热线: 010-83008808
    </Box>
  </VStack>
}

function Footer(props: StackProps) {
  return (
   <VStack padding='20px' width='100%' bg='#0D0E67' color='gray.50' {...props}> 
    <HStack spacing='50px'>
      <Addresses />
      <QRCodeCard />
    </HStack>
    <Text>Copyright © 2023 北京学尚太奇信息科技有限公司 | 京ICP备2022008077号</Text>
   </VStack>
  );
}

export default Footer;
