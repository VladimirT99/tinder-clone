import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import database from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function TinderCards() {
    const [people, setPeople] = useState([]);
    const collectionRef = collection(database, 'people');
    /*
     {
            name: "Steve Jobs",
            url : "https://imgs.search.brave.com/2BVYv8200l9StLdRCQe38LbJfK3L8HAw2JYK38ZtmAY/rs:fit:1200:1200:1/g:ce/aHR0cDovL3N0YXRp/Yy5idXNpbmVzc2lu/c2lkZXIuY29tL2lt/YWdlLzU0ZTc1Yzc5/ZWFiOGVhMmUwY2Q4/ZWE4ZC9pbWFnZS5q/cGc"
        },
        {
            name: "Elon Musk",
            url: "https://imgs.search.brave.com/-5kE6khP3Eu4cghmfiHV4cz6BBS59Q1w4KvB6GwHsCE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9vbmUz/N3BtLmltZ2l4Lm5l/dC9vbmUzN3BtLWVk/aXRvci1kZXYtaW1h/Z2VzL3MzZnMtcHVi/bGljL3VzZXItaW1h/Z2VzLzIwMjAtMDkv/ZWxvbi1tdXNrLW1v/YmlsZS5qcGc_Y2g9/V2lkdGgsRFBSJmF1/dG89Y29tcHJlc3Mm/cT02MCZ3PTEmZml0/PWNsaXAmZHByPTI"
        }
    */

    useEffect(() =>{
        const unsubscribe = getDocs(collectionRef).then((snapshot)=>
        setPeople(snapshot.docs.map(doc => doc.data()))
        )
        return () =>{
            unsubscribe();
        };
    }, []);

// setPeople(snapshot.map((doc) => doc.data()))

  return (
    <div>
        <div className='tinderCards_container'>
        {people.map(person =>(
            <TinderCard className='swipe'
            key= {person.name}
            preventSwipe={['up', 'down']}>
                <div className='card' style={{backgroundImage: `url(${person.url})`}}>
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        )
            )}
        </div>
    </div>
  )
}

export default TinderCards