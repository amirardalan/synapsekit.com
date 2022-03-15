import { css } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'
import { generateSlug } from '@/utils/generateSlug'

export default function NftAsset(asset: any) {

  const styleNftAsset = css({
    '.assetName': {
      marginTop: '.3rem',
      lineHeight: '1.2rem'
    }
  })

  const slugUrl = generateSlug(asset.name)


  return (
    <Link href={`${slugUrl}`} passHref>
      <a css={styleNftAsset} aria-label={asset.name}>
        <Image
          src={asset.image_url}
          alt={asset.name}
          width={430}
          height={430}
        />
        <p className="assetName">
          {asset.name}
        </p>
      </a>
    </Link>
  )
}