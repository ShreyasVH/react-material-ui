import { useState } from 'react';
import SearchSelect from '../../components/searchSelect';

export default function TabsCustom () {
    const [selectedItem, setSelectedItem] = useState('');

    const handleSelect = (event, item) => {
        setSelectedItem(item);
    };

    return (
        <div>
            <SearchSelect onSelect={handleSelect} />

            {selectedItem}
        </div>

    );
}