import tw from "twin.macro"
import Navbar from "./Navbar"
import Card from './components/Card'
import inspo from "./components/inspo"

const SECTION = tw.div`p-5 md:mx-5  `
const ROW = tw.div`grid grid-cols-3 grid-rows-1 gap-5 justify-items-start`
function App() {
  return (
    <div className="flex text-darkblue">
      <Navbar />
      <div className="pt-10 flex-1">
        <SECTION id="colors">
          <p className="text-2xl mb-5 md:ml-2 text-darkblue font-extrabold">colors</p>
          <ROW>
            <Card 
              logo="colors/colorspace.png" 
              name="mycolor space" 
              desc="Enter a Color And Generate nice Color Palettes " 
              url="https://mycolor.space/"
            />
            <Card 
              logo="colors/colorhex.png" 
              name="color hex" 
              desc="Color-hex gives information about colors " 
              url="https://www.color-hex.com/"
            /> 
            <Card 
              logo="colors/muzli.png" 
              name="Muzli Colors" 
              desc="Color Palette Generator " 
              url="https://colors.muz.li/"
            />
          </ROW>
          <ROW>
            <Card 
              logo="colors/colorhexa.png" 
              name="colorHexa" 
              desc="Color encyclopedia: Information and conversion" 
              url="https://www.colorhexa.com/"
            />
            <Card 
              logo="colors/colorhunt.png" 
              name="Color Hunt" 
              desc="Color Palettes " 
              url="https://colorhunt.co/"
            /> 
            <Card 
              logo="colors/webGradient.png" 
              name="WebGradients" 
              desc="free collection of 180 linear gradients" 
              url="https://webgradients.com/"
            />
          </ROW>
        </SECTION>
        <SECTION id="images">
          <p className="text-2xl mb-5 md:ml-2 text-darkblue font-extrabold">images</p>
          <ROW>
            <Card 
              logo="images/unsplash.png" 
              name="Unsplash" 
              desc="The internet's source for visuals" 
              url="https://unsplash.com/"
            />
            <Card 
              logo="images/pixabay.png" 
              name="Pixabay" 
              desc="high quality stock images, videos and music" 
              url="https://pixabay.com/"
            /> 
            <Card 
              logo="images/undraw.png" 
              name="unDraw" 
              desc="illustrations" 
              url="https://undraw.co/illustrations"
            />
          </ROW>
          <ROW>
            <Card 
              logo="images/vecteezy.png" 
              name="Vecteezy" 
              desc="free vector art, stock photos & videos." 
              url="https://www.vecteezy.com/"
            />
            <Card 
              logo="images/picjumbo.png" 
              name="picjumbo" 
              desc="free stock photos, backgrounds" 
              url="https://picjumbo.com/"
            /> 
            <Card 
              logo="images/freeimages.png" 
              name="freeImages" 
              desc="Photos, Vectors, Clipart, Icons, PSD & more" 
              url="https://www.freeimages.com/"
            />
          </ROW>
        </SECTION>
        <SECTION id="icons">
          <p className="text-2xl mb-5 md:ml-2 text-darkblue font-extrabold">icons</p>
          <ROW>
            <Card 
              logo="icons/icons8.png" 
              name="ICONS8" 
              desc="Icons, illustrations, photos, music, and design tools" 
              url="https://icons8.com/"
            />
            <Card 
              logo="icons/flaticon.png" 
              name="Flaticon" 
              desc="9.5M+ vector icons & stickers " 
              url="https://www.flaticon.com/"
            /> 
            <Card 
              logo="icons/ionic.png" 
              name=" ionicons" 
              desc="open source icons for use in web,iOS,Android and desktop apps" 
              url="https://ionic.io/ionicons"
            />
          </ROW>
          <ROW>
            <Card 
              logo="icons/heroicons.png" 
              name="heroicons" 
              desc="hand-crafted SVG icons, by the makers of Tailwind CSS." 
              url="https://heroicons.com/"
            />
            <Card 
              logo="icons/fontaws.png" 
              name="Font Awsome " 
              desc="icon library and toolkit " 
              url="https://fontawesome.com/"
            /> 
            <Card 
              logo="icons/svgrepo.png" 
              name="svgrepo" 
              desc="500.000+ Open-licensed SVG Vector and Icons" 
              url="https://www.svgrepo.com/"
            />
          </ROW>
        </SECTION>
        <SECTION id="inspiration">
          <p className="text-2xl mb-5 md:ml-2 text-darkblue font-extrabold">inspiration</p>
          <ROW>
            <>
              {inspo.map(item=>{
                return(
                <Card 
                  key={item.name}
                  logo={item.logo} 
                  name={item.name} 
                  desc={item.desc} 
                  url={item.url}
                />
                )
              })}
            </>
          </ROW>
        </SECTION>
      </div>
      
    </div>
  )
}

export default App
