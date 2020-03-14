export function replaceBlog(string) {
    return string.replace(
        /https:\/\/blog.tusjuegos.io/gm,
        'http://tusjuegos.io'
    )
}
