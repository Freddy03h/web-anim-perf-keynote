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
  reflow: require("file-loader!../assets/video/reflow.mp4"),
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
          <video src={videos.reflow} autoPlay loop muted controls style="border:none"></video>
        </Slide>

        {/***************************/}

        <Slide bgColor="secondary">
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
              Certains éléments et certaines propriétés provoquent automatiquement la création d'un Layer
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
          <video src={videos.layout} autoPlay loop muted controls style="border:none"></video>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Paint
          </Heading>
          <video src={videos.paint} autoPlay loop muted controls style="border:none"></video>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Composite
          </Heading>
          <video src={videos.composite} autoPlay loop muted controls style="border:none"></video>
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

          <iframe width="840" height="470" src="https://www.youtube.com/embed/pfiHFqnPLZ4" frameborder="0" allowfullscreen></iframe>
        </Slide>

        {/***************************/}

        <Slide>
          <Heading size={4} caps textColor="secondary">
            Margin animation
          </Heading>

          <iframe width="840" height="630" src="http://jsbin.com/yiregu/embed?output" frameborder="0" sandbox="allow-same-origin allow-scripts"></iframe>
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

          <iframe width="840" height="630" src="http://jsbin.com/vodive/embed?output" frameborder="0" sandbox="allow-same-origin allow-scripts"></iframe>
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

          <iframe width="840" height="630" src="http://jsbin.com/rolaso/embed?output" frameborder="0" sandbox="allow-same-origin allow-scripts"></iframe>
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

          <iframe width="840" height="630" src="http://jsbin.com/gamenur/embed?output" frameborder="0" sandbox="allow-same-origin allow-scripts"></iframe>
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

          <iframe width="840" height="630" src="http://jsbin.com/lakada/embed?output" frameborder="0" sandbox="allow-same-origin allow-scripts"></iframe>
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
              <img src={images.twitter} style={{border: 'none', boxShadow: 'none', verticalAlign: 'sub', height: 60, margin: 0, marginRight: 15}} />
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
