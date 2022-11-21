import {Header} from 'header';
import {Footer} from 'footer';
import {getTime} from 'get-time-abc'
export default function Index() {
    return (
        <>
            <Header/>
            <div>
                Content!
            </div>
            <div>
                {getTime()}
            </div>
            <Footer/>
        </>
    );
}
