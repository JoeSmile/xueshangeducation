import { Flex, Text, Box, VStack, FlexProps, Button, HStack, StackProps, border} from '@chakra-ui/react';
import { useRouter, usePathname } from 'next/navigation'

const menuList = [{
  name: '首页',
  path: '/'
},{
  name: '中外合作办学',
  path: '/cooperation'
},{
  name: '学尚留学',
  path: '/studyabroad'
},{
  name: '国际本科',
  path: '/sqa'
}, {
  name: '关于我们',
  path: '/aboutus'
}];

type MenuProps = {
  displayUnderline?: boolean
} & FlexProps;

function Menu(props: StackProps) {
  const {...restProps} = props;
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname)
  return (
    <HStack  bg='blue.500' width='100%' justifyContent='center' height='60px'
      alignItems='center' spacing={10} {...restProps}>
      {
        menuList.map((item, index) => {
          return <Button border='none'
          variant='link'
          color='white'
          colorScheme='blue'
          outlineOffset="none!important"
          outline='0!important'
          textDecoration={pathname === item.path && pathname !== '/' ? 'underline' : 'none'}
          p='0' key={item.name} onClick={() => {
            router.push(item.path)
          }}>{item.name}</Button>
        })
      }
    </HStack>
  );
}

export default Menu;
