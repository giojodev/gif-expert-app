import { Card,Image,Text,Group, Divider } from "@mantine/core" 

export const GifItem = ({title,url,id}) =>{

    console.log({title,url,id});

    return(
        <>
        {/* <div className="card">
            <img
                src={url}
                alt={title}
            />
            
            <h3>{title}</h3>
        </div> */}
            <Card shadow="sm" padding="md" radius="md" withBorder >
                <Card.Section>
                    <Image 
                     src={url}
                     height={180}
                     alt={title}
                     padding={10}
                    />
                </Card.Section>
                <Text size="sm" c="dark" >
                    {title}
                </Text>
            </Card>
        </>
    )
}