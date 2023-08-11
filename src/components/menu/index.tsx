import { FlexProps, Button, HStack, StackProps } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export const menuList = [{
  name: '英国',
  path: 'UK'
}, {
  name: '美国',
  path: 'USA'
}, {
  name: '澳大利亚',
  path: 'Australia'
}, {
  name: '加拿大',
  path: 'Canada'
}, {
  name: '新西兰',
  path: 'NewZealand'
},{
  name: '新加坡',
  path: 'Singapore'
}, {
  name: '港澳',
  path: 'HonKong'
}, {
  name: '中外合办',
  path: 'cooperation'
}, {
  name: '关于我们',
  path: 'aboutus'
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
    <HStack  bg='#122CBE' width='100%' justifyContent='center' height='60px'
      alignItems='center' spacing={10} {...restProps}>
      <Button
        border='none'
        variant='link'
        color='white'
        colorScheme='blue'
        outlineOffset="none!important"
        outline='0!important'
        p='0'
        onClick={() => router.push('/')}
      >
        首页
      </Button>
      {
        menuList.map((item, index) => {
          return (
            <Button border='none'
              variant='link'
              color='white'
              colorScheme='blue'
              outlineOffset="none!important"
              outline='0!important'
              textDecoration={pathname === item.path && pathname !== '/' ? 'underline' : 'none'}
              p='0'
              key={item.name}
              onClick={() => {
                let route = {};
                if (index<=6) {
                  route = {
                    pathname: `/studyabroad/${item.path}`,
                    query: {
                      country: item.path
                    }
                  }
                } else {
                  route = {
                    pathname:  `/${item.path}`,
                   
                  }
                }

                router.push(route)

              }}
            >
              {item.name}
            </Button>
          )
        })
      }
    </HStack>
  );
}

export default Menu;
