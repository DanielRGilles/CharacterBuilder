import React from 'react'

export default function Picker({head, middle, leg, setHead,  setLegs, setMiddle, setPhrase, handleClick, newPhrase}) {
    const headPics = ['fox', 'giraffee', 'eagle'];
    const middlePics = ['baby', 'pizza', 'wings'];
    const legPics = ['centaur', 'bones', 'fish'];
    return (
        <div className='picker-choose'>
            <label>
                head
                <select value={head} onChange={(e) => setHead(e.target.value)}>
                    {headPics.map((pic) => (<option key={pic}>{pic}</option>
                    ))}
                </select>
            </label>
            <label>
                middle
                <select value={middle} onChange={(e) => setMiddle(e.target.value)}>
                    {middlePics.map((pic) => (<option key={pic}>{pic}</option>
                    ))}
                </select>

            </label>
            <label>
                legs
                <select value={leg} onChange={(e) => setLegs(e.target.value)}>
                    {legPics.map((pic) => (<option key={pic}>{pic}</option>
                    ))}
                </select>

            </label>
            <label>
                CatchPhrase 
                <input type='text' value={newPhrase}placeholder='new catch phrase' onChange={(e) => setPhrase(e.target.value)}>
                </input>
                <button onClick={handleClick}>Add</button>
            </label>
        </div>
    )
}
