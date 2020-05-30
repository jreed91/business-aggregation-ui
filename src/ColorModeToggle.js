import React from 'react';
import {useColorMode, Button, Icon} from '@chakra-ui/core';

function ColorModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button variant="solid" onClick={toggleColorMode}> 
          <Icon name={colorMode === "light" ? "moon" : "sun"} size="18px" />
        </Button>
    );
  }
  export default ColorModeToggle;
