import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';


const TabsDemo = () => (
    <Tabs.Root className="TabsRoot" defaultValue="browse">
        <Tabs.List className="TabsList" >
            <Tabs.Trigger className="TabsTrigger" value="browse">
                Browse
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="featured">
                Featured
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="all-listings">
                All Listings
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="browse">
            
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="featured">
            
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="all-listings">
            
        </Tabs.Content>
    </Tabs.Root>
);

export default TabsDemo;