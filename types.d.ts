interface Book {
    id: number
    title: string, 
    author: string, 
    genre: string, 
    rating: number,
    total_copies: number,
    avaliable_copies: number, 
    description: string, 
    color: string, 
    cover: string
    video: string,
    summary: string,
    isLoanedBook?: boolean
}