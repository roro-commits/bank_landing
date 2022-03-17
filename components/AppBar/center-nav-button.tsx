import React, { useState } from "react";
import { Box, Button, Divider, HStack, VStack, Text, Hidden, Stack } from 'native-base'
import { border, color } from "native-base/lib/typescript/theme/styled-system";

interface props {
    description?: String | "Button"
}

export const WebButton: React.FC<props> = ({ description }) => {
    const [buttonPressed, SetbuttonPressed] = useState<boolean>(false)
    return (
        <VStack>
            
            <Button 
                colorScheme="white"
                w={"100%"}
            _web={{
                // below props will only be applied on 'web' platform
                bg: "white",
                _text: {
                    color: "coolGray.500",
                    fontWeight: "bold"
                },
                _pressed: {
                    // below props will only be applied on button is pressed
                    bg: "white",
                    _text: {
                        color: "coolGray.600",
                    }
                },
               

            }}
            _android={{
                // below props will only be applied on 'web' platform
                bg: "white",
                _text: {
                    color: "coolGray.500",
                    fontWeight: "bold"
                },
                _pressed: {
                    // below props will only be applied on button is pressed
                    bg: "white",
                    _text: {
                        color: "coolGray.600",
                    }
                },
               

            }}
            
            onPress={() =>  SetbuttonPressed(true)}
            >
                {description}
            </Button>
            
                <Box bg = {{md:true === buttonPressed ? "primary.200":"white"}} maxHeight={{md:1,base:0}}>
                    <Text>  </Text>
                </Box>

            

        </VStack>

    );
}


export default function () {

    return (
        <>
            <Box >
                <Stack space={{md:2}}  direction={{md:"row",sm:"column"}}  >
                    <WebButton description={"Home"}   />
                    <WebButton description={"About"} />
                    <WebButton description={"Contact"} />
                    <WebButton description={"Blog"} />
                    <WebButton description={"Careers"} />
                </Stack>
            </Box>
        </>
    )

}