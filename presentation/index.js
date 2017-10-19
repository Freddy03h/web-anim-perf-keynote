// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Code,
  Link,
} from "spectacle";
import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
//import createTheme from "spectacle/lib/themes/default";
import createTheme from "./theme";

import MobileAnimation from "../components/MobileAnimation";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  renderengine: require("../assets/quicklook-render-engine.png"),
  newmargindesktop: require("../assets/new-margin-desktop.png"),
  newmarginmobile: require("../assets/new-margin-mobile.png"),
  newmarginmobileframe: require("../assets/new-margin-mobile-frame.png"),
  marginmobile3: require("../assets/margin-mobile-3.png"),
  newtransformmobile: require("../assets/new-transform-mobile.png"),
  newtransformwillchangemobile: require("../assets/new-transform-willchange-mobile.png"),
  caniusewillchange: require("../assets/caniuse-willchange.png"),
  caniuseraf: require("../assets/caniuse-raf.png"),
  caniuseanim: require("../assets/caniuse-anim.png"),
  twitter: require("../assets/twitter.png"),
  // toto: require("../assets/toto"),
};
preloader(images);

const videos = {
  layout: require("file-loader!../assets/video/layout.mp4"),
  paint: require("file-loader!../assets/video/paint.mp4"),
  composite: require("file-loader!../assets/video/composite.mp4"),
};

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        progress="bar"
        controls={false}
        theme={theme}
      >
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            Web Animation
          </Heading>
          <Heading size={1} fit caps textColor="black">
            Performance
          </Heading>
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Render
          </Heading>
          <Heading caps size={1} textColor="primary">
            Engine
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Render Engine
          </Heading>
          <img src={images.renderengine} />
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <svg style={{width: 200, fill: 'white'}} x="0px" y="0px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50"><g><g><path d="M50,50H1V1h49V50z M5,46h41V5H5V46z"/><rect x="16" y="17" width="4" height="31"/><rect x="3" y="14" width="45" height="4"/></g><rect x="17" y="30" width="31" height="4"/></g></svg>
          <Heading caps size={1} textColor="tertiary">
            Layout
          </Heading>
          <Heading caps size={4} textColor="primary">
            aka. Reflow
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            CSS Layout Mode
          </Heading>

          <BlockQuote>
            <Quote>Algorithm determining the position and the size of boxes based on the way they interact with their sibling and ancestor boxes</Quote>
            <Cite>MDN</Cite>
          </BlockQuote>

          <Text textColor="tertiary">Block Layout, Inline Layout,<br/>Table Layout, Positioned Layout,<br/>Flexible Box Layout, Grid Layout</Text>
        </Slide>

        <Slide>
          <iframe width="840" height="630" src="https://www.youtube.com/embed/qR6Y6OaDwpU" frameBorder="0" allowFullScreen></iframe>
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <svg style={{width: 200, fill: 'white'}} x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100"><g><path d="M63.6083,33.3253l-5.6326-4.8058c-0.6924-0.5907-1.3169-1.2565-1.8621-1.9852L45.8148,12.7692   c-0.5551-0.7419-1.6389-0.8195-2.2939-0.1644L20.1917,35.9339c-0.8425,0.8426-0.8693,2.2001-0.0607,3.0754l8.6663,9.3792   c0.47,0.5085-0.2387,1.2413-0.7626,0.7885l-9.7507-8.4251c-0.8801-0.7604-2.1978-0.7124-3.0203,0.11l-1.7855,1.7855   c-0.5367,0.5367-0.5957,1.387-0.1381,1.9927L23.687,58.3359c0.5468,0.7236,1.1719,1.3845,1.8641,1.9705l6.1729,5.226   c0.9782,0.8281,2.4278,0.768,3.334-0.1382L63.7421,36.71C64.6933,35.7587,64.6316,34.1985,63.6083,33.3253z"/><path d="M84.7972,75.308c-7.569-7.4921-19.1168-15.9644-19.1168-15.9644c-2.9304-1.9994-2.2886-4.1873-1.0511-5.4247l6.0219-6.0218   c3.1407-3.1407,3.1407-8.233,0-11.3737c-0.5366-0.5366-1.4066-0.5366-1.9432,0.0001l-33.058,33.0579   c-0.5366,0.5366-0.5366,1.4066,0,1.9432c3.1407,3.1407,8.233,3.1407,11.3737,0l6.0217-6.0218   c1.2375-1.2375,2.9297-2.0137,5.4248,1.0511c0,0,8.4723,11.5479,15.9643,19.1168c2.8564,2.8858,7.5142,2.8937,10.3853,0.0226   h0.0001C87.6908,82.8222,87.683,78.1644,84.7972,75.308z M80.9224,81.7959c-1.027,1.027-2.6921,1.027-3.7191,0   c-1.027-1.027-1.027-2.6921,0-3.7191c1.027-1.027,2.6921-1.027,3.7191,0C81.9494,79.1038,81.9494,80.7689,80.9224,81.7959z"/></g></svg>
          <Heading caps size={1} textColor="tertiary">
            Paint
          </Heading>
        </Slide>

        <Slide>
          <Text bold textAlign="left">Applique tous les styles visuels</Text>
          <List textColor="tertiary">
            <ListItem>background</ListItem>
            <ListItem>color</ListItem>
            <ListItem>box-shadow</ListItem>
            <ListItem>border-color</ListItem>
            <ListItem>…</ListItem>
          </List>
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <svg style={{width: 200, fill: 'white'}} x="0px" y="0px" viewBox="0 0 256 256" enableBackground="new 0 0 256 256"><path d="M188.156,107.66l35.227-20.34L128,32.245L32.617,87.319l35.228,20.34L32.617,128l35.228,20.34l-35.228,20.34L128,223.755  l95.382-55.074l-35.227-20.34L223.383,128L188.156,107.66z M128,42.638l77.383,44.682L128,132.001L50.616,87.319L128,42.638z   M76.844,112.856L128,142.394l51.156-29.538L205.384,128L128,172.682L50.616,128L76.844,112.856z M205.384,168.681L128,213.362  l-77.384-44.682l26.228-15.144L128,183.074l51.156-29.538L205.384,168.681z"/></svg>
          <Heading caps size={1} textColor="tertiary">
            Composite
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Composite
          </Heading>

          <List textColor="tertiary">
            <ListItem>Bitmaps envoyés au GPU</ListItem>
            <ListItem>GPU applique des opérations sur les textures (matrix operation, alpha blends, … )</ListItem>
            <ListItem>
              Certains éléments et certaines propriétés provoquent automatiquement la création d'un <strong>Layer</strong>
              <List textColor="tertiary">
                <ListItem>3D transform</ListItem>
                <ListItem>css animation opacity or transform</ListItem>
                <ListItem>accelerated css filters</ListItem>
                <ListItem>video, canvas</ListItem>
                <ListItem>…</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Composite
          </Heading>

          <List textColor="tertiary">
            <ListItem>Hack pour forcer l'accélération GPU : <Code>translateZ(0)</Code></ListItem>
            <ListItem>Ne pas en abuser, surtout sur des éléments qui repaint</ListItem>
            <ListItem>À abandonner au profit de <Code>will-change</Code></ListItem>
          </List>
        </Slide>

        <Slide>
          <MobileAnimation />
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Anime
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Layout
          </Heading>
          <video src={videos.layout} autoPlay loop muted controls style={{border:'none'}}></video>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Paint
          </Heading>
          <video src={videos.paint} autoPlay loop muted controls style={{border:'none'}}></video>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Composite
          </Heading>
          <video src={videos.composite} autoPlay loop muted controls style={{border:'none'}}></video>
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Web
          </Heading>
          <Heading caps size={1} textColor="primary">
            Animation
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Web animation
          </Heading>

          <Text textColor="tertiary">Le but est d'atteindre les 60 FPS (images par seconde)</Text>
          <Text textColor="tertiary">Soit ~16.6ms entre chaque image</Text>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Framerate
          </Heading>

          <iframe width="840" height="470" src="https://www.youtube.com/embed/pfiHFqnPLZ4" frameBorder="0" allowFullScreen></iframe>
        </Slide>

        {/***************************/}

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Margin animation
          </Heading>

          <iframe width="840" height="630" src="http://jsbin.com/yiregu/embed?output" frameBorder="0" sandbox="allow-same-origin allow-scripts"></iframe>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Margin Desktop
          </Heading>

          <img src={images.newmargindesktop} />
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Margin Mobile
          </Heading>

          <img src={images.newmarginmobile} />
        </Slide>

        <Slide>
          <img src={images.newmarginmobileframe} />
          <img src={images.marginmobile3} />
        </Slide>

        {/***************************/}

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Transform animation
          </Heading>

          <iframe width="840" height="630" src="http://jsbin.com/vodive/embed?output" frameBorder="0" sandbox="allow-same-origin allow-scripts"></iframe>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Transform Mobile
          </Heading>

          <img src={images.newtransformmobile} />
        </Slide>

        {/***************************/}

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Transform + will-change
          </Heading>

          <iframe width="840" height="630" src="http://jsbin.com/rolaso/embed?output" frameBorder="0" sandbox="allow-same-origin allow-scripts"></iframe>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            will-change Mobile
          </Heading>

          <img src={images.newtransformwillchangemobile} />
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            caniuse
          </Heading>

          <img src={images.caniusewillchange} />
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Request
          </Heading>
          <Heading caps size={3} textColor="primary">
            Animation
          </Heading>
          <Heading caps size={1} textColor="tertiary">
            Frame
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">
            requestAnimationFrame
          </Heading>

          <List textColor="tertiary">
            <ListItem>Appelé avant le rendu de la frame</ListItem>
            <ListItem>Regroupe les transformations de la même frame</ListItem>
            <ListItem>Le callback n'est plus appelé lorsque la page n'est plus visible</ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../examples/raf.example")}
          ranges={[
            { loc: [0, 6], title: "requestAnimationFrame" },
          ]}
        />

        <Slide>
          <Heading size={4} caps textColor="secondary">
            caniuse
          </Heading>

          <img src={images.caniuseraf} />
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Throttling
          </Heading>

          <List textColor="tertiary">
            <ListItem>Ne pas rappeler une fonction avant un 'temps' donné</ListItem>
            <ListItem>Utile pour des animations basées sur Scroll, Mouse et Touch Events</ListItem>
            <ListItem>Découple les user events de l'animation</ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../examples/throttling.example")}
          ranges={[
            { loc: [0, 16], title: "Throttling" },
            { loc: [15, 16], note: "Listen scroll event" },
            { loc: [2, 5], note: "Store wanted data" },
            { loc: [0, 1] },
            { loc: [14, 15], note: "requestAnimationFrame" },
            { loc: [6, 13], note: "DOM manipulation here" },
            { loc: [9, 10] },
          ]}
        />

        <Slide>
          <Heading size={4} textColor="secondary">
            requestAnimationFrame
          </Heading>

          <Text textColor="tertiary">C'est du JS, donc soumis à l'Event Loop</Text>

          <iframe width="840" height="630" src="http://jsbin.com/gamenur/embed?output" frameBorder="0" sandbox="allow-same-origin allow-scripts"></iframe>
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary">
            Web
          </Heading>
          <Heading caps size={3} textColor="primary">
            Animations
          </Heading>
          <Heading caps size={1} textColor="tertiary">
            API
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Web Animations API
          </Heading>

          <List textColor="tertiary">
            <ListItem>Unification des animations déclaratives et impératives</ListItem>
            <ListItem>Permet de créer une animation en JavaScript qui fonctionne avec la même efficacité qu'une animation CSS</ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../examples/waa1.example")}
          ranges={[
            { loc: [0, 11], title: "Web Animations API" },
            { loc: [1, 5], note: "CSS @keyframes" },
            { loc: [5, 10], note: "CSS animation-*" },
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../examples/waa2.example")}
          ranges={[
            { loc: [0, 15], title: "We can control it !" },
            { loc: [0, 1], note: ".animate return Animation obj" },
            { loc: [8, 9] },
            { loc: [10, 11] },
            { loc: [11, 12], note: "usefull to go at a precise moment of the anim." },
            { loc: [13, 14] },
            { loc: [14, 15] },
          ]}
        />

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Web Animations API
          </Heading>

          <iframe width="840" height="630" src="http://jsbin.com/lakada/embed?output" frameBorder="0" sandbox="allow-same-origin allow-scripts"></iframe>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            caniuse
          </Heading>

          <img src={images.caniuseanim} />
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            References 1/2
          </Heading>

          <Text textAlign="left">Talks</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link textColor="tertiary" href="https://www.youtube.com/watch?v=cpDqc5KPk7U" target="_blank">Animations on Fire</Link></ListItem>
            <ListItem><Link href="https://www.youtube.com/watch?v=rpNXWxMyzHQ" target="_blank">Delivering 60 FPS in the browser</Link></ListItem>
          </List>

          <Text textAlign="left">Articles</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="http://www.html5rocks.com/en/tutorials/speed/layers/" target="_blank">Accelerated Rendering in Chrome</Link></ListItem>
            <ListItem><Link href="https://developers.google.com/web/fundamentals/performance/rendering/" target="_blank">Rendering performance</Link></ListItem>
            <ListItem><Link href="https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas" target="_blank">Simplify paint complexity and reduce paint areas</Link></ListItem>
            <ListItem><Link href="http://www.html5rocks.com/en/tutorials/speed/rendering/" target="_blank">Jank Busting for Better Rendering Performance</Link></ListItem>
            <ListItem><Link href="http://www.html5rocks.com/en/tutorials/speed/animations/?redirect_from_locale=fr" target="_blank">Leaner, Meaner, Faster Animations with requestAnimationFrame</Link></ListItem>
            <ListItem><Link href="http://spoike.ghost.io/user-input-framerate-throttling-in-the-browser/" target="_blank">User input framerate throttling in the browser</Link></ListItem>
            <ListItem><Link href="http://w3c.github.io/web-animations/">W3C Web Animations</Link></ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4} caps textColor="secondary">
            References 2/2
          </Heading>

          <Text textAlign="left">Others</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="http://csstriggers.com/" target="_blank">CSS Triggers</Link></ListItem>
            <ListItem><Link href="http://jankfree.org/" target="_blank">Jank Free</Link></ListItem>
            <ListItem><Link href="https://github.com/web-animations/web-animations-js" target="_blank">Polyfill Web Animation API</Link></ListItem>
            <ListItem><Link href="https://github.com/wuct/raf-throttle" target="_blank">Throttle a function by requestAnimationFrame</Link></ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={1} caps textColor="tertiary">
            Merci
          </Heading>
          <Heading size={5} caps textColor="secondary" margin="3em 0 0">
            <Link href="https://twitter.com/HarrisFreddy" textColor="secondary">
              <img src={images.twitter} style={{border: 'none', boxShadow: 'none', verticalAlign: 'sub', height: 60, margin: '0 15px 0 0'}} />
              @harrisfreddy
            </Link>
          </Heading>
          <Heading size={6} caps textColor="tertiary" margin="1em 0 0.5em">
            Freelance React Mobile Progressive Web App
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
