import PropTypes from 'prop-types';
import { Card,Image,Text } from "@mantine/core" 

export const GifItem = ({title,url,id}) =>{

    console.log({title,url,id});

    return(
        <>
        <div className="card">
            <img
                src={url}
                alt={title}
            />
            
            <h3>{title}</h3>
        </div>
            {/* <Card  padding="lg" radius="md" withBorder >
                <Card.Section>
                    <Image 
                     src={url}
                     height={180}
                     alt={title}
                     padding={10}
                    />
                </Card.Section>
                <Text size="md" c="dark" >
                    {title}
                </Text>
            </Card> */}
        </>
    )
}

GifItem.propTypes ={
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}