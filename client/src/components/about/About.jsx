
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const StyledLink = styled(Link)`
    margin: 0px 10px ;
    color: #000
`
const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Jainam Jain</Typography>
                <Text variant="h5">I'm a Student of B.E IT from shah and anchor kutchhi engineering.<br/>
                    I have build this project for my Internship.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <StyledLink href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></StyledLink>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <StyledLink href="https://www.instagram.com/jainam_jain0401/" color="inherit" target="_blank">
                            <Instagram />
                        </StyledLink>
                    </Box>  
                        or send me an Email 
                        <StyledLink href="mailto:jainammithalaljain@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </StyledLink>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;