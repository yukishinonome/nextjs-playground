// TODO: global.scss作成したら外す
// import '../styles/global.scss'
import * as nextImage from 'next/image'

export const parameters = {
  layout: 'padded',
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      iphone5S: {
        name: 'iPhone 5S・SE1',
        styles: {
          width: '320px',
          height: '568px'
        }
      },
      iphone8: {
        name: 'iPhone 8・SE2',
        styles: {
          width: '375px',
          height: '667px'
        }
      },
      iphoneX: {
        name: 'iPhone X',
        styles: {
          width: '375px',
          height: '812px'
        }
      },
      ipad97: {
        name: 'iPad 9.7inch',
        styles: {
          width: '768px',
          height: '1024px'
        }
      },
      ipad105: {
        name: 'iPad 10.5inch',
        styles: {
          width: '834px',
          height: '1112px'
        }
      },
      xperia: {
        name: 'Xperia',
        styles: {
          width: '360px',
          height: '640px'
        }
      },
      laptop: {
        name: 'Laptop',
        styles: {
          width: '1024px',
          height: '768px'
        }
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '1024px'
        }
      }
    }
  }
}

// next/imageそのままだとStorybookで使えないので置き換える
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { width, height } = props
    const ratio = (height / width) * 100
    return (
      <div
        style={{
          paddingBottom: `${ratio}%`,
          position: 'relative'
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%'
          }}
          {...props}
        />
      </div>
    )
  }
})
