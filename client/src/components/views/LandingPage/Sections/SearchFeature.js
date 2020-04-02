import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchFeature(props) {
    const [SearchTerms, setSearchTerms] = useState("");
    const [UseSearch, setUseSearch] = useState(null);

    const onChangeSearch = event => {
        event.persist();

        if (UseSearch) clearTimeout(UseSearch);
        const val = event.currentTarget.value;
        setSearchTerms(val);
        setUseSearch(
            setTimeout(() => {
                props.refreshFunction(val);
            }, 500)
        );
    };

    return (
        <div>
            <Search value={SearchTerms} onChange={onChangeSearch} placeholder="Search By Typing..." />
        </div>
    );
}

export default SearchFeature;
