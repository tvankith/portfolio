import { Playfair, PT_Sans_Narrow } from 'next/font/google';

export const playfair = Playfair({
    subsets: ["latin"]
})

export const ptSansNarrow = PT_Sans_Narrow({
    subsets: ["latin"],
    weight: ["400", "700"]
})
