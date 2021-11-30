import React from 'react'

export default function Picker({head, middle, leg, setHead,  setLegs, setMiddle, setPhrase, handleClick}) {
    const headPics = [1, 2, 3];
    const middlePics = ['a', 'b', 'c'];
    const legPics = ['a', 'b', 'c'];
    return (
        <div className='picker-choose'>
            <label>
                Head
                <select value={head} onChange={(e) => setHead(e.target.value)}>
                    {headPics.map((pic) => (<option key={pic}>{pic}</option>
                    ))}
                </select>
            </label>
            <label>
                Middle
                <select value={middle} onChange={(e) => setMiddle(e.target.value)}>
                    {middlePics.map((pic) => (<option key={pic}>{pic}</option>
                    ))}
                </select>

            </label>
            <label>
                Legs
                <select value={leg} onChange={(e) => setLegs(e.target.value)}>
                    {legPics.map((pic) => (<option key={pic}>{pic}</option>
                    ))}
                </select>

            </label>
        </div>
    )
}
