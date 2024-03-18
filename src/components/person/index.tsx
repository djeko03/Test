import React from "react";
import './index.css'
import cn from "classnames";

interface IPerson {
    id?: number,
    fullName: string,
    email: string,
    phoneNumber: string,
    active:boolean,
}

export const Person: React.FC<IPerson> = ({
    id,
    fullName,
    email,
    phoneNumber,
    active,
}) => {
    return (
            <ul className={cn(active? 'person__list_list' : 'person__list_tiles')}>
                <li className={cn('person__list-item', active? 'person__list-item_list' : 'person__list-item_tiles')}>
                    <div>
                        {fullName}
                    </div>
                </li>
                <li className={cn('person__list-item', active? 'person__list-item_list' : 'person__list-item_tiles')}>
                    <div>
                        {email}
                    </div>
                </li>
                <li className={cn('person__list-item', active? 'person__list-item_list' : 'person__list-item_tiles')}>
                    <div>
                        {phoneNumber}
                    </div>
                </li>
            </ul>
    )
}