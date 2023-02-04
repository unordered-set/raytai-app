import CompositionChart from '@/components/compositionchart'
import Head from 'next/head'

function Chart() {
    return (<>
    </>)
}

export default function Home() {
    return (<>
        <Head>
            <title>Raytai portfolio battle</title>
            <meta name="description" content="Raytai portfolio battle" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='app-background'>
            <div style={{overflowY: 'scroll', height: '100svh'}}>
                <div style={{backgroundColor: 'rgba(255,255,255,0.3)', height: '100svh', backdropFilter: 'blur(7px)'}}>
                    <div style={{display: 'flex', height: '100%', flexDirection: 'column-reverse'}}>
                        <div style={{width: '100%', height: '4em', backgroundColor: 'lightblue', overscrollBehavior: 'contain'}}></div>
                        <CompositionChart/>
                    </div>
                </div>
                <div style={{backgroundColor: 'rgba(255,255,255,0.0)', height: '100vh'}}>    
                </div>
            </div>
        </div>
    </>)
}