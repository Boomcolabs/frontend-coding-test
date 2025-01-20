import Image, { ImageProps } from 'next/image';

export default function MyImage({ alt = 'alt of image', ...rest }: ImageProps) {
    return (
        <Image
            alt={alt}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDdkN2Q3IiAvPjwvc3ZnPg=="
            quality={80}
            {...rest}
        />
    );
}
