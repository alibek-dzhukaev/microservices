export interface BuildOptions {
    port: number
    paths: BuildPaths
    mode: BuildMode
    analyzer?: boolean
    platform: BuildPlatform

}

export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'


export interface BuildPaths {
    html: string
    entry: string
    output: string
    src: string
    public: string
}