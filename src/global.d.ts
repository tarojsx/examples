declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

declare namespace JSX {
    interface IntrinsicElements {
        import: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>

        editor: React.DetailedHTMLProps<
            {
                readOnly?: boolean
                placeholder?: string
                showImgSize?: boolean
                showImgToolbar?: boolean
                showImgResize?: boolean
                onReady?(): void
                onFocus?(): void
                onBlur?(): void
                onInput?(): void
                onStatusChange?(): void
            },
            {}
        >
    }
}

// @ts-ignore
declare const process: {
    env: {
        TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq'
        [key: string]: any
    }
}

declare module '@/theme.module.scss' {
    const colorBrand: string
    const colorBrandLight: string
    const colorBrandDark: string
}
