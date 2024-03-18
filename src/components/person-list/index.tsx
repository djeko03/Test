import { Person } from '../person';
import { Button } from "../button";
import './index.css'
import { useState } from 'react';
import cn from 'classnames';
import { personData } from '../../data/data';

export const PersonList = () => {
    const [isList, setIsList] = useState <boolean>(true);
    const [isActiveList, setIsActiveList] = useState <boolean>(true)
    const [isActiveTiles, setIsActiveTiles] = useState <boolean>(false)
    return (
        <section className='container'>
            <div className='person-list__buttons'>
                <Button 
                    buttonText='List'
                    isActive={isActiveList} 
                    onClick={() => {
                        setIsActiveList(true)
                        setIsActiveTiles(false)
                        setIsList(true)
                    }}/>
                <span>|</span>
                <Button 
                    buttonText='Tiles'
                    isActive={isActiveTiles} 
                    onClick={() => {
                        setIsActiveTiles(true)
                        setIsActiveList(false)
                        setIsList(false)
                    }}/>
            </div>
            <div className={cn(isList? 'wrapper_list' : 'wrapper_tiles')}>
                {personData.map(person => 
                    <Person 
                        key={person.id} 
                        active={isList} 
                        fullName={person.fullName} 
                        email={person.email} 
                        phoneNumber={person.phoneNumber}
                    />)}
            </div>
        </section>
    )
}