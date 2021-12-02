import React from 'react'

export default function Character({head, middle, leg}) {
    return (
        <section style={{display: 'flex', flexDirection: 'column'}}>
            <article  aria-label='head' style={{
            backgroundImage: `url(./${head}-head.png)`,
            height: 150,
             width: 150,
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
                 }}>
            </article>
            <article aria-label='middle' style={{
          backgroundImage: `url(./${middle}-middle.png)`,
          height: 150,
          width: 150,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
                }}>  
            </article>

            <article aria-label='leg' style={{
              backgroundImage: `url(./${leg}-legs.png)`,
              height: 150,
              width: 150,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
                }}>
            </article>

        </section>
            
        
    )
}
