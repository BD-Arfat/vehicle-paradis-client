import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {tagSelected, tagRemoved} from '../../features/Filters/FilterSlices'

const Tag = ({title}) => {

    const dispatch = useDispatch();
    const { tags : selectedTags} = useSelector((state) => state?.filter);

    const isSelected = selectedTags?.includes(title.tag) ? true : false;

    const style = isSelected
        ? "btn  btn-neutra px-4 cursor-pointer"
        : "btn btn-outline px-4  cursor-pointer";

    const handleSelect = () => {
        if (isSelected) {
            dispatch(tagRemoved(title.tag));
        } else {
            dispatch(tagSelected(title.tag));
        }
    };

    return (
        <div >
            <button onClick={(handleSelect)} className={style}>{title.tag}</button>

        </div>
    );
};

export default Tag;