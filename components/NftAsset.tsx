import { css } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'
import { generateSlug } from '@/utils/generateSlug'

export default function NftAsset(asset: any) {

  const styleNftAsset = css({
    position: 'relative',
    '&:hover': {
      '@media(min-width: 1025px)': {
        '.hoverOverlay': {
          display: 'flex',
        }
      }
    },
    '.hoverOverlay': {
      zIndex: 1,
      display: 'none',
      position: 'absolute',
      width: '100%',
      height: '98.5%',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(0, 0, 0, 0.7)',
      textAlign: 'center',
    },
    '.assetName, .assetNameMobile': {
      padding: '2rem',
      textAlign: 'center',
      color: 'var(--color-bg)',
      lineHeight: '1rem',
      fontSize: 12,
    },
    '.assetNameMobile': {
      display: 'none',
      padding: 0,
      color: 'var(--color-text)',
      textAlign: 'left',
      fontSize: 10,
      lineHeight: '.8rem',
      '@media(max-width: 1024px)': {
        display: 'block',
      },
      '@media(max-width: 480px)': {
        marginBottom: '.5rem',
      }
    }
  })

  const slugUrl = generateSlug(asset.name)

  return (
    <Link href={`${slugUrl}`} passHref>
      <a css={styleNftAsset} aria-label={asset.name}>
        <div className="hoverOverlay">
          <p className="assetName">
            {asset.name}
          </p>
        </div>
        <Image
          src={asset.image_url}
          alt={asset.name}
          width={430}
          height={430}
        />
        <p className="assetNameMobile">
          {asset.name}
        </p>
      </a>
    </Link>
  )
}