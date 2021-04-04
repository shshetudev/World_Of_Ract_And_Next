import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from "styled-components";

// todo: explain the page after finishing the crud
export default class SiteDocument extends Document {
    render() {
        // create a stylesheet
        const sheet = new ServerStyleSheet();
        // Get the Main content from style sheet
        const main = sheet.collectStyles(<Main/>)
        // Get style element from the stylesheet
        const styleTags = sheet.getStyleElement();
        // Return the JSX page
        return(
            <html>
            <Head>
                <meta charSet='utf-8'/>
                <meta name='viewport' content={'initial-scale=1.0, width=device-width'} />
                {styleTags}
            </Head>
            <body>
            <div className={'root'}>
                {main}
            </div>
            {NextScript}
            </body>
            </html>
        );
    }
}
