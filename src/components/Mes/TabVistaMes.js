import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import VistaMes2000_2010 from "./VistaMes2000-2010";
import VistaMes2011_2021 from "./VistaMes2011-2021";

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="Años">
            <Tab label="2000-2010" value="1" />
            <Tab label="2011-2021" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><VistaMes2000_2010/></TabPanel>
        <TabPanel value="2"><VistaMes2011_2021/></TabPanel>
      </TabContext>
    </Box>
  );
}