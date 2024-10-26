import {AppBar,Box, Toolbar , Typography, styled} from '@mui/material';
import Search from './Search';
const StyleHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
    box-shadow: none;
`;


const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const Subheading = styled(Typography)`
    font-size: 10px;
`;


//css camelCase in css
const PlusImage = styled('img')({
    width: 10,
    marginLeft: 4,
    height: 10
})

const logo ='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const sublogo='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
const Header = () => {
    return (
    <StyleHeader>
        <Toolbar style={{minHeight:55}}>
        <Component>
            <img src={logo} alt="Flipkart" style={{width:75}}/>
            <Box style={{display:'flex'}}>
                <Subheading>Explore&nbsp;
                <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                </Subheading>
                <PlusImage src={sublogo} alt='sub-logo'/>
            </Box>
        </Component>
        <Search />
        </Toolbar>
    </StyleHeader>
    )
}

export default Header;